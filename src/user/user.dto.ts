import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AddUserDto {
  @ApiProperty({ example: 123 })
  id?: string;

  @ApiProperty({ example: 'hjc' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '1067075323@qq.com' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'hjclalala' })
  @IsNotEmpty()
  username: string;
}
