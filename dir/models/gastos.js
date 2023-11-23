"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GastosSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
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
});
const Gasto = (0, mongoose_1.model)("Gasto", GastosSchema);
exports.default = Gasto;
