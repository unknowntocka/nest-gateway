import { MSG_TYPE, RECEIVE_TYPE } from '@/helper/feishu/message';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class FeishuMessageDto {
  @IsNotEmpty()
  @IsEnum(RECEIVE_TYPE)
  @ApiProperty({ example: 'open_id', enum: RECEIVE_TYPE })
  receive_id_type: RECEIVE_TYPE;

  @IsNotEmpty()
  @ApiProperty({ example: 'ou_3e904302d1e55ee95a206abb99e03bb9' })
  receive_id: string;

  @IsNotEmpty()
  @ApiProperty({ example: '{"text":" test content"}' })
  content: string;

  @IsNotEmpty()
  @IsEnum(MSG_TYPE)
  @ApiProperty({ example: 'text', enum: MSG_TYPE })
  msg_type: MSG_TYPE;
}
