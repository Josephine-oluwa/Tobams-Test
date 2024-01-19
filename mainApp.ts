import express, {Application, Request, Response} from "express"
import cors from "cors"
import {HTTP, mainError} from "./Error/mainError"
import { NextFunction } from "connect"
import image from "./router/imageRouter"
import { errorHandler } from "./Error/errorHandler"


export const mainApp = (app: Application) => {
    app.use(express.json())
    app.use(cors({
        origin: "*",
        methods: ["GET", "POST"],
    }))

    app.get("/", (req: Request, res: Response) => {
        res.status(HTTP.OK).json({
            message: "Awesome code"
        })
    })

    app.use("/api", image)

    app.all("*", (req: Request, res: Response, next: NextFunction) => {
        next(
            new mainError({
                name: "Router Error",
                message: `This Error is coming up because the ${req.originalUrl} URL, isn't correct!!!`,
                status: HTTP.BAD_REQUEST,
                success: false 
            })
        )
    })


    app.use(errorHandler)
}