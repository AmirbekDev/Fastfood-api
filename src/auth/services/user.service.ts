import { client } from "../../shared/database"
import { Role, User } from "../models/user"
import "../../setup"
import md5 from "md5"
import { RegisterDto } from "../models/register"

export const createUser = async (user: RegisterDto) => {
    const sql = "insert into users (email, password, name, surname, birthday, phone, is_confirmed, role, token) values ($1, $2, $3, $4, $5, $6, $7, $8, $9) Returning *;"
    const token = md5(user.email + user.name + process.env.SECRET_KEY!)
    const is_confirmed: Boolean = false
    const role: Role = "none"
    const result = await client.query(sql, [user.email, user.password, user.name, user.surname, user.birthday, user.phone, is_confirmed, role, token])
    const createdUser: RegisterDto = result.rows[0]
    return createdUser;
}

export const findUserByEmail = async (email: string) => {
    const sql = "Select * from users where email = $1;";
    const result = await client.query(sql, [email])
    if(result.rowCount == 0) {
        return null
    }
    const user: User = result.rows[0]
    return user
}

export const updateUser = async (role: Role, token: string, is_confirmed: boolean, id: number) => {
    const sql = `UPDATE users SET role = $1, token = $2, is_confirmed = $3 WHERE id = $4 RETURNING *;`
    const result = await client.query(sql, [role, token, is_confirmed, id])
    return result.rows[0]
}