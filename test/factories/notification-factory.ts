import { Notification,NotificationProps } from '@app/entities/notification';
import { Content } from './../../src/app/entities/content';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override ={}){
    return new Notification({
        recipientId: '1234',
        content: new Content('Você recebeu um novo pagamento'),
        category: 'payment',
        ...override,
    });
}