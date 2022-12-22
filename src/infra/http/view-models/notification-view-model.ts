import { Notification } from '@app/entities/notification';

export class NotificationViewModel{
    static toHTTP(notifcation: Notification){
        return {
            id: notifcation.id,
            content: notifcation.content.value,
            category: notifcation.category,
            recipientId: notifcation.recipientId,
        };
    }
}