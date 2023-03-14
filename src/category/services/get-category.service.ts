import { client } from "../../shared/database"
import { Category } from "../models/category.model"

export const allCategories = async () => {
    const sql = `SELECT * FROM category;`
    const result = await client.query(sql)
    const category: Category = result.rows[0]
    return category;
}
export const findCategoryById = async (id: string) => {
    const sql = `SELECT * FROM category where id=$1;`
    const result = await client.query(sql, [id])
    if(result.rowCount == 0) {
        return null
    }
    return result.rows[0];
}