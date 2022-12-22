import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notification-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
    
    it('shoud be able to send notification',async () => {
        const notificationRepository = new InMemoryNotificationRepository();
        const sendNotification = new SendNotification(notificationRepository);

        const {notification} = await sendNotification.execute({
            recipientId: '1234',
            content: 'Você recebeu um novo pagamento',
            category: 'payment',
        });

        expect(notificationRepository.notifications).toHaveLength(1);
        expect(notificationRepository.notifications[0]).toEqual(notification);
    });
});