import { client } from "../../shared/database"

export const deleteCategory = async (id: string) => {
    const sql = `DELETE from category where id=$1;`
    const result = await client.query(sql, [id])
    if(result.rowCount == 0) {
        return null
    }
    return result.rows[0] 
}