import { Router } from "express";
import authorization from "../../manage/helpers/middleware/user"
import { allCategories, findCategoryById } from "../services/get-category.service";
const router = Router()

router.get("/", authorization, async (req, res) => {
    let category = await allCategories()
    console.log("category:" + category)
    res.status(200).json({
        message: "Retrive all categories",
        categories: [{
            id: category.id,
            name: category.name,
            icon: category.icon
        }]
    })
})

router.get("/:id", authorization, async (req, res) => {
    const id = req.params.id
    const category = await findCategoryById(id)
    if(category == null) {
        return res.status(400).json({
            message: `Category with id=${id} is not in database`
        })
    }
    res.status(200).json({
        message: `Retrive category with id=${id}`,
        categories: [{
            id: category.id,
            name: category.name,
            icon: category.icon
        }]
    })
})

export default router;
