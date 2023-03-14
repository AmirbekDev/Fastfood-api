import { Router } from "express";
import authorization from "../helpers/middleware/user"
import { CredentialDto } from "../models/credentials.model";
import { changeUserCredentials } from "../services/users.service";
import CredentialSchema from "../helpers/validation/credential.schema";
const router = Router()

router.put("/:id/access", authorization, async (req, res) => {
    const id: any = req.params.id
    const data: CredentialDto = req.body
    const user = res.locals.user
    const { error } = CredentialSchema.validate(req.body)
    if(error) {
        return res.status(401).json({
            error: error.details[0].message
        })
    }
    console.log("changed")
    await changeUserCredentials(data.password, data.role, id)
    res.status(200).json({
        message: "User access credentials updated",
        user: {
                id: id,
                email: user.email,
                name: user.name,
                surname: user.surname,
                birthday: user.birthday,
                phone: user.phone,
                role: data.role
            }
    })
})

export default router;