import { Router } from "express";
import { ResendDto } from "../models/resend";
import { createVerification } from "../services/verification.service";
import { getTimeOut, verifyCode } from "./helpers/functions";
import { sendEmail } from "./helpers/mail";
import { findUserByEmail } from "../services/user.service";

const router = Router()

router.post("/resend", async (req, res) => {
    const body: ResendDto = req.body
    const user = await findUserByEmail(body.email)
    if(user == null) {
        return res.status(500).json({
            message: "User not found"
        })
    }
    if(user.role != "none") {
        return res.status(404).json({
            message: "account already verified!"
        })
    }
    const code = verifyCode()
    const verification = await createVerification(code, user.email)
    if(verification == null) {
        return res.status(401).json({
            message: "verification null"
        })
    }
    await sendEmail(user.email, code)
    const timeOut = +process.env.TIME_OUT!
    console.log("Time out: "+ getTimeOut(verification.created_at, timeOut))
    return res.status(400).json({
        message: `Code sent to email ${user.email}`,
        timeOut: timeOut,
        verificationId: verification.id
    })
})

export default router;