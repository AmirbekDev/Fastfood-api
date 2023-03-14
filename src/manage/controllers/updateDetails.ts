import { Router } from "express";
import { UserDto } from "../models/users.model";
import { changeUserData } from "../services/users.service";
import authorization from "../helpers/middleware/user"
import UserSchema from "../helpers/validation/user.schema";
const router = Router()

router.put("/:id/details", authorization, async (req, res) => {
    const id = req.params.id
    const body: UserDto = req.body
    const { error } = UserSchema.validate(req.body)
    if(error) {
        return res.status(401).json({
            error: error.details[0].message
        })
    }
    await changeUserData(body.email, body.name, body.surname, body.birthday, body.phone, id)

    res.status(200).json({
        message: "User info updated",
        user:{
            id: id,
            email: body.email,
            name: body.name,
            surname: body.surname,
            birthday: body.birthday,
            phone: body.phone,
            role: "admin"
        }
    })
})

export default router;