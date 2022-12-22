import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { Notification as RowNotification } from '@prisma/client';

export class PrismaNotcationMapper {
  static toPrisma(notification: Notification) {
    return {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        //createdAt: notification.createdAt,

    };
  }

  static toDomain(row: RowNotification): Notification {
    return new Notification({
        category: row.category,
        content: new Content(row.content),
        recipientId: row.recipientId,
        readAt: row.readAt,
        cancelAt: row.cancelAt,
        createdAt: row.createdAt,
    }, row.id);
  }
}