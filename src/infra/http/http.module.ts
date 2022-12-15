import { NotificationController } from './controllers/notifications.controller';
import { Module } from "@nestjs/common";
import { SendNotification } from 'src/app/use-cases/send-notification';
import { DatabaseModule } from '../databae/database.module';

@Module({
    imports: [DatabaseModule],
    controllers:[NotificationController],
    providers: [SendNotification],
})
export class HttpModule {}