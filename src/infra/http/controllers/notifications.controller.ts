import { GetRecipientNotification } from './../../../app/use-cases/get-recipient-notification';
import { CountRecipientNotification } from './../../../app/use-cases/count-recipient-notification';
import { UnreadNotification } from './../../../app/use-cases/unread-notification';
import { ReadNotification } from './../../../app/use-cases/read-notification';
import { CancelNotification } from './../../../app/use-cases/cancel-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { Body, Controller, Patch, Post,Param, Get } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { NotificationViewModel } from '../view-models/notification-view-model';


@Controller('notifications')
export class NotificationController {

  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private countRecipientNotification: CountRecipientNotification,
    private getRecipientNotification: GetRecipientNotification,
    ) {}

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string ) {
    await this.cancelNotification.execute({notificationId:id});
  }

  @Get('count/from/:recipientId')
  async countFromRecipient(@Param('recipientId') recipientId: string){
    const {count} = await this.countRecipientNotification.execute({recipientId
    });

    return {
      count,
    };
  }

  @Get('from/:recipientId')
  async getFromRecipient(@Param('recipientId') recipientId: string){
    const {notifications} = await this.getRecipientNotification.execute({recipientId
    });

    return {
      notifications:notifications.map(NotificationViewModel.toHTTP),
    };
  }

  @Patch(':id/read')
  async read(@Param('id') id: string ){
    await this.readNotification.execute({notificationId:id});
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string ){
    await this.unreadNotification.execute({notificationId:id});
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const {recipientId, content , category} = body;

    const {notification} = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return {
      notification:NotificationViewModel.toHTTP(notification),
    };
  }
}
