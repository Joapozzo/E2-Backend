import { Model, ObjectId ,Schema, model } from "mongoose";

export interface IGastos {
    user: ObjectId,
    concepto: string,
    lugar: string,
    precio: number,
    descripcion: string
}

const GastosSchema = new Schema<IGastos>({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    concepto: {
        type: String,
        required: true
    },
    lugar: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
    },
})

const Gasto: Model <IGastos> = model<IGastos>("Gasto", GastosSchema)

export default Gasto