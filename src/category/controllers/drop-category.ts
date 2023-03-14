import { Router } from "express";
import authorization from "../../manage/helpers/middleware/user"
import { deleteCategory } from "../services/drop-category.service";
const router = Router()

router.delete("/:id", authorization, async (req, res) => {
    const id = req.params.id
    const dropCategory = await deleteCategory(id)
    return res.status(200).json({
        message: "Category deleted",
        category: {
            dropCategory
        }
    })
})

export default router;