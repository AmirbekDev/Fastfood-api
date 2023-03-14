import { client } from "../../shared/database"
import { Category } from "../models/category.model"

export const addCategory = async (name: string, icon: string) => {
    const sql = `INSERT INTO category (name, icon) VALUES ($1, $2);`
    const result = await client.query(sql, [name, icon])
    const category: Category = result.rows[0]
    return category;
}