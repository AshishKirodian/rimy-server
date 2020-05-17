import { dbClient, Connection } from "../../../db/connection";

export default class HistoryDAO {
    public static async getAllRecords() {
        console.log('where------')
        let connection = await Connection.getOpenConnection(dbClient);
        console.log(connection, 'here---------------------');
        return await connection.query(`select * from ymir.history`);
    }
}