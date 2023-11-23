import express, { Express } from "express";

import userRoutes from "../routes/rUser"
import gastoRoutes from "../routes/rGasto"

import { conectarDB } from "../database/config";

export class Server {
    app: Express;

    constructor(){
        this.app = express();
        this.middlewares();
        this.conexionaDB();
        this.routes();
    }   

    async conexionaDB(): Promise<void>{
        await conectarDB()
    }

    routes(): void {
        this.app.use('/users', userRoutes)
        this.app.use('/gastos', gastoRoutes)
    }

    middlewares(): void {
        this.app.use(express.json())
    }

    listen(): void {
        this.app.listen(8080, ()=>{
            console.log("Corriendo en el puerto 8080")
        })
    }
}