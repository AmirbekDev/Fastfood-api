import { Router } from "express";
import { findVerificationById } from "../services/verification.service";
import { getTimeOut } from "./helpers/functions";

const router = Router()

router.get("/status", async (req, res) => {
    try {
        const verificationId: string = String(req.query.id)
        const verification = await findVerificationById(verificationId)
        if(verification == null) {
            return res.status(400).json({
                message: "verification null"
            })
        }
        const timeOut = getTimeOut(verification.created_at, +process.env.TIME_OUT!)
        if(timeOut >= 0) {
            return res.status(200).json({
                message: `code sent to email ${verification.email}`,
                verificationId: verification.id,
            })
        }
        else {
            return res.status(400).json({
                message: "code expired, resend code",
                verificationId: verificationId
            })
        }
    }
    catch (err) {
        return res.status(500).json({
            message: "Internal Server Error",
            err
        })
    }
    
})

export default router;