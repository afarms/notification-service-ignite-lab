import { NotificationRepository } from '@app/repositories/notifications-repository';
import { Notification } from '@app/entities/notification';

export class InMemoryNotificationRepository implements NotificationRepository {
    
    public  notifications: Notification[] = [];
    
    async findManyRecipientId(recipientId: string): Promise<Notification[]> {
        return this.notifications.filter(
            notification => notification.recipientId === recipientId); 
    }
    
    async countManyByRecipientId(recipientId: string): Promise<number> {
        return this.notifications.filter(
            notification => notification.recipientId === recipientId).length;
    }

    async findById(notificationId: string): Promise<Notification> {
        const notification = this.notifications.find(
            item => item.id === notificationId);

        if(!notification){
            return null;
        }

        return notification;
    }

    async create(notification: Notification){
        this.notifications.push(notification);
    }

    async save(notification: Notification): Promise<void> {
        const index = this.notifications.findIndex(
            item => item.id === notification.id
        );
        
        if(index >= 0){
            this.notifications[index] = notification;
        }
    }

};