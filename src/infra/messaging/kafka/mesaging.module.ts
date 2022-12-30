
import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { KafkaCosumerService } from './kafka-consumer.service';

@Module({

    imports: [ ],
    providers: [KafkaCosumerService ],
    controllers: [ NotificationsController],

})
export class MessagingModule {}