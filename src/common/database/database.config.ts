import { getConfig } from '@/utils';
import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

const { MYSQL_CONFIG } = getConfig();

const getTypeOrmConfig = (): TypeOrmModuleOptions => {
  return {
    ...MYSQL_CONFIG,
    entities: [join(__dirname, `../../**/*.${MYSQL_CONFIG.entities}{.ts,.js}`)],
  };
};

export default registerAs('database', () => ({
  config: getTypeOrmConfig(),
}));
