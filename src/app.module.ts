import { MessagingModule } from './infra/messaging/kafka/mesaging.module';
import { DatabaseModule } from './infra/database/database';
import { HttpModule } from './infra/http/http.module';
import { Module } from '@nestjs/common';


@Module({
  imports: [HttpModule,DatabaseModule, MessagingModule],
})
export class AppModule {}
