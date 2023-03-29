import { getConfig } from '@/utils';
import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DatabaseType } from 'typeorm';

const { MYSQL_CONFIG } = getConfig();

const databaseType: DatabaseType = 'mysql';

const getTypeOrmConfig = (): TypeOrmModuleOptions => {
  return {
    ...MYSQL_CONFIG,
    type: databaseType,
    entities: ['src/**/*entity.ts'],
  };
};

export default registerAs('database', () => ({
  config: getTypeOrmConfig(),
}));
