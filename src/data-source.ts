import * as dotenv from 'dotenv';
import * as path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const options: DataSourceOptions & SeederOptions = {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    type: 'postgres',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    migrationsRun: true,
    logging: ['migration'],
    entities: [path.join(__dirname, '../dist/**/entities/*.js')],
    migrations: [path.join(__dirname, '../dist/db/migration/*.js')],
    seeds: [path.join(__dirname, '../dist/db/migration/*.js')],
};

export const dataSource = new DataSource(options);
