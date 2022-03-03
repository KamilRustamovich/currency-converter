import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: '21872216',
	database: 'currency-converter',
	entities: [__dirname + '/**/*{.ts,.js}'],
	synchronize: false,
	migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
	cli: {
		migrationsDir: 'src/migrations'
	}
}

export default config;