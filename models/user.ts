import { Model, Schema, model } from "mongoose"; 

export interface IUser {
    nombre: string,
    apellido: string,
    usuario: string,
    dni: number,
    admin: boolean
}

const UserSchema = new Schema<IUser>({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    usuario: {
        type: String,
        required: true,
        unique: true
    },
    dni: {
        type: Number,
        required: true,
        unique: true
    },
    admin: {
        type: Boolean,
        required: true,
        default: false
    },
})

const User: Model<IUser> = model<IUser>("User", UserSchema)

export default User;