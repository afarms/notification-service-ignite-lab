import { DatabaseModule } from './infra/databae/database.module';
import { HttpModule } from './infra/http/http.module';
import { Module } from '@nestjs/common';


@Module({
  imports: [HttpModule,DatabaseModule],
})
export class AppModule {}
