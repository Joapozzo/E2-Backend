"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllGastos = exports.createGasto = void 0;
const gastos_1 = __importDefault(require("../models/gastos"));
const user_1 = __importDefault(require("../models/user"));
const createGasto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dataGasto = req.body;
    const { user, concepto, lugar, precio, descripcion } = dataGasto;
    const userData = yield user_1.default.findOne({ usuario: user });
    if (!user || !concepto || !lugar || !precio) {
        res.json({
            msj: "Faltan datos necesarios en la peticion"
        });
        return;
    }
    if (!userData) {
        res.json({
            msj: "Usuario no encontrado"
        });
        return;
    }
    const gasto = new gastos_1.default({
        user: userData === null || userData === void 0 ? void 0 : userData._id,
        concepto,
        lugar,
        precio,
        descripcion
    });
    yield gasto.save();
    res.json({
        msj: "Todo ok",
        gasto
    });
});
exports.createGasto = createGasto;
const getAllGastos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gasto = yield gastos_1.default.find();
    res.json({
        msj: "Todo ok",
        gasto
    });
});
exports.getAllGastos = getAllGastos;
