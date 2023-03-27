import { MSG_TYPE, RECEIVE_TYPE } from '@/helper/feishu/message';
import { ApiProperty } from '@nestjs/swagger';

export class FeishuMessageDto {
  @ApiProperty({ example: 'open_id' })
  receive_id_type: RECEIVE_TYPE;

  @ApiProperty({ example: 'ou_3e904302d1e55ee95a206abb99e03bb9' })
  receive_id: string;

  @ApiProperty({ example: '{"text":" test content"}' })
  content: string;

  @ApiProperty({ example: 'text', enum: MSG_TYPE })
  msg_type: MSG_TYPE;
}
