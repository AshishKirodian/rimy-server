import { dbClient, Connection } from "../../../db/connection";

export default class SaveDAO {
    public static async saveHistory(imageURl: string, scannedText: string) {
        let connection = await Connection.getOpenConnection(dbClient);
        return await connection.query(`insert into ymir.history (url, scanned_res) values
        ('$1', '$2', '$3')`, [imageURl, scannedText]);
    }
}