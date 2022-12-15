import { PrismaService } from './prisma/prisma.service';
import { Module } from "@nestjs/common";
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notificcations-repository';
import { NotificationRepository } from 'src/app/repossitories/notifications-repositorry';

@Module({
    providers: [
        PrismaService,
        {
            provide: NotificationRepository,
            useClass: PrismaNotificationsRepository,
        }
    ],
    exports: [NotificationRepository],
})
export class DatabaseModule {}