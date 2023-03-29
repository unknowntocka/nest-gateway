import { getConfig } from '@/utils';
import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DatabaseType } from 'typeorm';
import entities from './entities';

const { MYSQL_CONFIG } = getConfig();

const databaseType: DatabaseType = 'mysql';

const getTypeOrmConfig = (): TypeOrmModuleOptions => {
  return {
    ...MYSQL_CONFIG,
    type: databaseType,
    entities: entities,
    autoLoadEntities: true,
  };
};

export default registerAs('database', () => ({
  config: getTypeOrmConfig(),
}));
