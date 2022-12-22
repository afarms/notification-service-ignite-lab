import { PrismaService } from './prisma/prisma.service';
import { Module } from "@nestjs/common";
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';
import { NotificationRepository } from '@app/repositories/notifications-repository';

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