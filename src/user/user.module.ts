import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeishuController } from './feishu/feishu.controller';
import { FeishuService } from './feishu/feishu.service';
import { UserController } from './user.controller';
import { User } from './user.mongo.entity';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [FeishuController, UserController],
  providers: [UserService, FeishuService],
  exports: [UserService],
})
export class UserModule {}
