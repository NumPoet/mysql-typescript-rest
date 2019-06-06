import {createPool} from 'mysql2/promise';

export async function connect() {

    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: 'S2NT2m2r2d0n2..',
        database: 'node_mysql_ts',
        connectionLimit: 10
    });
    return connection;
}