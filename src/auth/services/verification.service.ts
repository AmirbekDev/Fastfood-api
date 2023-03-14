import { client } from "../../shared/database"
import { Verification } from "../models/verification"
import { v4 as uuidv4 } from 'uuid';

export const createVerification = async (code: string, email: string) => {
    const sql = `insert into verification (id, code, email) values ($1, $2, $3) returning created_at;`
    const id = uuidv4()
    const result = await client.query(sql, [id, code, email])
    const createdAt: Date = new Date(result.rows[0].created_at)
    if (result.rowCount == 0) {
        return null;
    }
    console.log(result.rows[0])
    return new Verification(id, code, email, createdAt)
}

export const findVerificationById = async (id: string) => {
    const sql = `SELECT * FROM verification WHERE id = $1;`
    const result = await client.query(sql, [id])
    const {email, code, created_at} = result.rows[0]
    if(result.rowCount == 0) {
        return null
    }
    return new Verification(id, code, email, new Date(created_at));
}

export const cleanVerification = async (timeOut: number) => {
    const time = new Date().getTime() - timeOut * 1000

    const sql = `DELETE FROM verification WHERE created_at < $1;`
    const result = await client.query(sql, [new Date(time)])
    console.log("Timeout in service:" + new Date(time))
    return result.rowCount
}