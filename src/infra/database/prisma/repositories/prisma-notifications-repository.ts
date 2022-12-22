import { PrismaNotcationMapper } from './../mappers/prisma-notification-mapper';
import { PrismaService } from '../prisma.service';
import { Notification } from 'src/app/entities/notification';
import { NotificationRepository } from '../../../../app/repositories/notifications-repository'
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {

    constructor(private prismaService: PrismaService){}
    async countManyByRecipientId(recipientId: string): Promise<number> {
        const count = this.prismaService.notification.count({
            where: {
                recipientId: recipientId,
            },
        });

        return count;
    }
    async findManyRecipientId(recipientId: string): Promise<Notification[]> {
        const notification = await this.prismaService.notification.findMany({
            where: {
                recipientId: recipientId,
            },
        });

        if(!notification){
            return null;
        }

        return notification.map(PrismaNotcationMapper.toDomain);
    }

    async findById(notificationId: string): Promise<Notification> {
        const notification = await this.prismaService.notification.findUnique({
            where: {
                id: notificationId,
            },
        });

        if(!notification){
            return null;
        }

        return PrismaNotcationMapper.toDomain(notification);
    }
   
    async create(notification: Notification): Promise<void> {
        const row = PrismaNotcationMapper.toPrisma(notification);
        await this.prismaService.notification.create({
            data:row,
        });
    }

    async save(notification: Notification): Promise<void> {

        const row = PrismaNotcationMapper.toPrisma(notification);
        await this.prismaService.notification.update({ 
            where: { id: row.id },
            data:row,
        });

    }

}