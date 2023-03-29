import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AddUserDto } from './user.dto';
import { UserService } from './user.service';

@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: '新增用户',
  })
  @Post('/add')
  create(@Body() user: AddUserDto) {
    return this.userService.createOnSave(user);
  }
}
