import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notification-repository';
import { CountRecipientNotification } from './count-recipient-notification';
import { makeNotification } from '../../../test/factories/notification-factory';
import { GetRecipientNotification } from './get-recipient-notification';

describe('Get recipents notification', () => {
    
    it('shoud be able to get recipient notifications',async () => {
        const notificationRepository = new InMemoryNotificationRepository();
        const getRecipientNotification = new GetRecipientNotification(
            notificationRepository
            );


        await notificationRepository.create(makeNotification({
            recipientId: 'recipient-1',
        }));

        await notificationRepository.create(makeNotification({
            recipientId: 'recipient-1',
        }));

        await notificationRepository.create(makeNotification({
            recipientId: 'recipient-2',
        }));

        const {notifications} = await getRecipientNotification.execute({
            recipientId: 'recipient-1',
        });

        expect(notifications).toHaveLength(2);
        expect(notifications).toEqual(expect.arrayContaining([
            expect.objectContaining({ recipientId: 'recipient-1' }),
            expect.objectContaining({ recipientId: 'recipient-1' }),
        ]));
    });
});