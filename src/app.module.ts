import { DatabaseModule } from './infra/database/database';
import { HttpModule } from './infra/http/http.module';
import { Module } from '@nestjs/common';


@Module({
  imports: [HttpModule,DatabaseModule],
})
export class AppModule {}
