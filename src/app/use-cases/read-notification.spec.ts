import { makeNotification } from '@test/factories/notification-factory';
import { NotificationNotFound } from './errors/notification-not-found';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notification-repository';
import { CancelNotification } from './Cancel-notification';
import { ReadNotification } from './read-notification';

describe('Read notification', () => {
    
    it('should be able to read notification',async () => {
        const notificationRepository = new InMemoryNotificationRepository();
        const readNotification = new ReadNotification(notificationRepository);

        const notification = makeNotification();

        await notificationRepository.create(notification);

        await readNotification.execute({
            notificationId: notification.id,
        });

        expect(notificationRepository.notifications[0].readAt).toEqual(expect.any(Date));
    });

    it('shoud not be able to read notification if notification does not exists',async () => {
        const notificationRepository = new InMemoryNotificationRepository();
        const readNotification = new ReadNotification(notificationRepository);

        await expect(readNotification.execute({
            notificationId: 'fake-notification-id',
        })).rejects.toThrow(NotificationNotFound);
    });
});