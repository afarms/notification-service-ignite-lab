import { KafkaCosumerService } from '@infra/messaging/kafka/kafka-consumer.service';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices/interfaces';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const kafkaConsumerService = app.get(KafkaCosumerService);

  app.connectMicroservice<MicroserviceOptions>({
    strategy: kafkaConsumerService,
  })

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
