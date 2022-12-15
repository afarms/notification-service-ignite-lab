import { NotificationRepository } from '../../src/app/repossitories/notifications-repositorry';
import { Notification } from '../../src/app/entities/notification';

export class InMemoryNotificationRepository implements NotificationRepository {
    public  notifications: Notification[] = [];

    async create(notification: Notification){
        this.notifications.push(notification);
    }

};