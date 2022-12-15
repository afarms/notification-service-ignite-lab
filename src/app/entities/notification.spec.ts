import { Notification } from './notification';
import { Content } from './content';

describe('Notification', () => {
    it('shoud be able to create a notification',() => {
        const content = new Notification({
            content: new Content('Você recebeu um novo pagamento'),
            category: 'payment',
            recipientId: '1234',
                });
        expect(content).toBeTruthy();
      });
})

