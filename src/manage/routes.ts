import { Router } from "express";
import allUsers from "./controllers/allUsers"
import updateUser from "./controllers/updateDetails"
import updateCredential from "./controllers/updateAccess"
import deleteUser from "./controllers/delete"
const router = Router()

router.use("/users", allUsers)
router.use("/users", updateUser)
router.use("/users", updateCredential)
router.use("/users", deleteUser)

export default router;