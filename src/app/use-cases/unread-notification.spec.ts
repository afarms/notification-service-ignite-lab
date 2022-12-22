import { makeNotification } from '@test/factories/notification-factory';
import { NotificationNotFound } from './errors/notification-not-found';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notification-repository';
import { UnreadNotification } from './unread-notification';

describe('Unread notification', () => {
    
    it('should be able to Unread a notification',async () => {
        const notificationRepository = new InMemoryNotificationRepository();
        const unreadNotification = new UnreadNotification(notificationRepository);

        const notification = makeNotification({
            readAt: new Date(),
        });

        await notificationRepository.create(notification);

        await unreadNotification.execute({
            notificationId: notification.id,
        });

        expect(notificationRepository.notifications[0].readAt).toBeNull();
    });

    it('shoud not be able to Unread notification if notification does not exists',async () => {
        const notificationRepository = new InMemoryNotificationRepository();
        const unreadNotification = new UnreadNotification(notificationRepository);

        await expect(unreadNotification.execute({
            notificationId: 'fake-notification-id',
        })).rejects.toThrow(NotificationNotFound);
    });
});