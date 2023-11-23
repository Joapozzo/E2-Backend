import { Request, Response } from "express";

import User, { IUser } from "../models/user";

export const createUser = async(req: Request, res: Response) => {
    const userData: IUser = req.body

    const { nombre, apellido, usuario, dni, admin } = userData;

    const newUser = new User({
        nombre,
        apellido,
        usuario,
        dni,
        admin
    })

    await newUser.save();

    res.json({
        msj: "Todo ok",
        newUser
    })
}

export const getAllUsers = async(req: Request, res: Response) => {

    const user = await User.find()

    res.json({
        msj: "Todo ok",
        user
    })
}

export const getUserByName = async(req: Request, res: Response) => {

    const { usuario } = req.params

    const user: IUser | null = await User.findOne({usuario: usuario})

    res.json({
        msj: "Todo ok",
        user
    })
}