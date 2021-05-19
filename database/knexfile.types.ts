import { MigratorConfig, PoolConfig, SeedsConfig} from "knex";

export type Connection = {
    user: string,
    password: string,
    database: string,
    timezone: string,
    socketPath: string,
    host: string,
    port: number | string
};

export type KnexConfig = {
    client: string,
    connection: Connection,
    pool: PoolConfig,
    migrations: MigratorConfig,
    seeds: SeedsConfig
}