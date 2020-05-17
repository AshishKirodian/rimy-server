import { Pool } from 'pg';

const dbParams = {
    user: 'lfoidcwvbyisqx',
    password: 'b03bb65ffddca5649bb86cfdc957900742086980e54b1bbbd271fd17d1dbbd83',
    host: 'ec2-54-195-247-108.eu-west-1.compute.amazonaws.com',
    port: 5432,
    database: 'd84t8o9segk997'
}

export let dbClient = new Pool({
    user: dbParams.user,
    host: dbParams.host,
    database: dbParams.database,
    password: dbParams.password,
    port: dbParams.port
});

export class Connection {
    private static instance: any = null;
    public static async getOpenConnection(client: Pool): Promise<Pool> {
        if (this.instance !== null) {
            return client;
        } else {
            this.instance = await client.connect();
            console.log(this.instance);
            return this.instance;
        }
    }
}