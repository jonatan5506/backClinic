import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

config();

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  migrations: [__dirname + '/migrations/*.ts'],
  synchronize: false,
};

export default new DataSource(dataSourceOptions);
