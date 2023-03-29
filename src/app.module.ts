import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TYPEORM_CONFIG } from './common/constant';
import { UserModule } from './user/user.module';
import { getConfig } from './utils';
import databaseConfig from './common/database/database.config';
import { RedisClientOptions } from 'redis';
import { redisStore } from 'cache-manager-redis-yet';
import redisStoreConfig from './common/database/redis.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) =>
        config.get<TypeOrmModuleOptions>(TYPEORM_CONFIG),
    }),
    CacheModule.registerAsync<RedisClientOptions>({
      isGlobal: true,
      useFactory: async () => ({
        store: await redisStore(redisStoreConfig),
        ttl: 60 * 60 * 64 * 7,
      }),
    }),
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [getConfig, databaseConfig],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
