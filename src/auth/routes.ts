import Router from "express"
import registerRoute from "./controllers/register"
import loginRoute from "./controllers/login"
import verifyRoute from "./controllers/verify"
import statusRoute from "./controllers/status"
import resendRoute from "./controllers/resend"
const router = Router()

router.use("/auth", registerRoute)
router.use("/auth", loginRoute)
router.use("/auth", verifyRoute)
router.use("/auth", statusRoute)
router.use("/auth", resendRoute)

export default router;