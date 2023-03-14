import { NextFunction, Request, Response } from "express";
import { findUserByToken } from "../../services/users.service";

export default async function (req: Request, res: Response, next: NextFunction) {
    try {
        var token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({
                message: "Token is not provided",
            })
        }
        res.locals.user = await findUserByToken(token)
        const user = res.locals.user
        if(user == null) {
            return res.status(400).json({
                message: "Token is invalid"
            })
        }
        if(user.role != "admin") {
            return res.status(401).json({
                message: "Only adminstrators can retrive users"
            })
        }
        next()
    }
    catch (err) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: err
        })
    }
}