import { Router } from "express";
import getCategories from "../category/controllers/get-category"
import dropCategory from "../category/controllers/drop-category"
import addCategory from "../category/controllers/add-category";
const router = Router()

router.use("/categories", getCategories)
router.use("/categories", addCategory)
router.use("/categories", dropCategory)

export default router;