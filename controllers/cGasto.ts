import { Request, Response } from "express";

import Gasto, { IGastos } from "../models/gastos"
import User from "../models/user";

export const createGasto = async (req:Request, res:Response) => {
    const dataGasto: IGastos = req.body;

    const { user, concepto, lugar, precio, descripcion } = dataGasto;

    const userData = await User.findOne({usuario:user})

    if(!user || !concepto || !lugar || !precio) {
        res.json({
            msj: "Faltan datos necesarios en la peticion"
        })
        return
    }

    if(!userData) {
        res.json({
            msj: "Usuario no encontrado"
        })
        return
    }

    const gasto = new Gasto({
        user: userData?._id,
        concepto,
        lugar,
        precio,
        descripcion
    })

    await gasto.save()

    res.json({
        msj: "Todo ok",
        gasto
    })
}

export const getAllGastos = async (req:Request, res:Response) => {
    const gasto = await Gasto.find()

    res.json({
        msj: "Todo ok",
        gasto
    })
}
