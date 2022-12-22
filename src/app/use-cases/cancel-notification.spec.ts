import { makeNotification } from '@test/factories/notification-factory';
import { NotificationNotFound } from './errors/notification-not-found';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notification-repository';
import { CancelNotification } from './Cancel-notification';

describe('Cancel notification', () => {
    
    it('shoud be able to cancel notification',async () => {
        const notificationRepository = new InMemoryNotificationRepository();
        const cancelNotification = new CancelNotification(notificationRepository);

        const notification = makeNotification();

        await notificationRepository.create(notification);

        await cancelNotification.execute({
            notificationId: notification.id,
        });

        expect(notificationRepository.notifications[0].cancelAt).toEqual(expect.any(Date));
    });

    it('shoud not be able to cancel notification if notification does not exists',async () => {
        const notificationRepository = new InMemoryNotificationRepository();
        const cancelNotification = new CancelNotification(notificationRepository);

        await expect(cancelNotification.execute({
            notificationId: 'fake-notification-id',
        })).rejects.toThrow(NotificationNotFound);
    });
});