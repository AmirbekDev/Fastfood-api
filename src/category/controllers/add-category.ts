import { Request, Response, Router } from "express";
import authorization from "../../manage/helpers/middleware/user"
import upload from "../multer";
import { addCategory } from "../services/add-category.service";
const router = Router()

router.post("/", upload.single("file"), authorization, async (req: Request, res: Response) => {
    const name = req.body.name
    const icon = req.file as Express.Multer.File
    const filename = icon.filename
    const createCategory = await addCategory(name, filename)
    console.log("Icon:" + icon)
    return res.status(200).json({
        message: "New category created",
        createCategory
    })
})

export default router;