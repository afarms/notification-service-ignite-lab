import { GetRecipientNotification } from './../../app/use-cases/get-recipient-notification';
import { UnreadNotification } from './../../app/use-cases/unread-notification';
import { ReadNotification } from './../../app/use-cases/read-notification';
import { CountRecipientNotification } from './../../app/use-cases/count-recipient-notification';
import { CancelNotification } from './../../app/use-cases/cancel-notification';
import { NotificationController } from './controllers/notifications.controller';
import { Module } from "@nestjs/common";
import { SendNotification } from 'src/app/use-cases/send-notification';
import { DatabaseModule } from '../database/database';

@Module({
    imports: [DatabaseModule],
    controllers:[NotificationController],
    providers: [
        SendNotification,
        CancelNotification,
        CountRecipientNotification,
        ReadNotification,
        UnreadNotification,
        GetRecipientNotification
    ],
})
export class HttpModule {}