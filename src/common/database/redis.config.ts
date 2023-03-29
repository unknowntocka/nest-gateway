import { getConfig } from '@/utils';
import { RedisClientOptions } from 'redis';

const redisConfig = getConfig('REDIS_CONFIG');

const redisStoreConfig: RedisClientOptions = {
  socket: {
    host: redisConfig.host,
    port: redisConfig.port,
  },
  password: redisConfig.auth,
  database: redisConfig.db,
};

export default redisStoreConfig;
