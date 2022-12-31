import { DatabaseModule } from './../../database/database';

import { SendNotification } from '@app/use-cases/send-notification';
import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { KafkaCosumerService } from './kafka-consumer.service';

@Module({

    imports: [ DatabaseModule],
    providers: [KafkaCosumerService, SendNotification ],
    controllers: [ NotificationsController],

})
export class MessagingModule {}