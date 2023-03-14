import { Request, Response } from "express";
import authorization from "../helpers/middleware/user"

export default async (req: Request, res: Response) => {
    const user = res.locals.user
    res.status(200).json({
        message: "Retrive all users",
        user: [
            {
                id: user.id,
                email: user.email,
                name: user.name,
                surname: user.surname,
                birthday: user.birthday,
                phone: user.phone,
                role: user.role
            }
        ]
    })
}