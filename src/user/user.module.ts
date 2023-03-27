import { CacheModule, Module } from '@nestjs/common';
// import { UserService } from './user.service';
// import { UserController } from './user.controller';
import { FeishuController } from './feishu/feishu.controller';
import { FeishuService } from './feishu/feishu.service';

@Module({
  imports: [CacheModule.register()],
  controllers: [FeishuController],
  providers: [FeishuService],
})
export class UserModule {}
