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
exports.getUserByName = exports.getAllUsers = exports.createUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const { nombre, apellido, usuario, dni, admin } = userData;
    const newUser = new user_1.default({
        nombre,
        apellido,
        usuario,
        dni,
        admin
    });
    yield newUser.save();
    res.json({
        msj: "Todo ok",
        newUser
    });
});
exports.createUser = createUser;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.default.find();
    res.json({
        msj: "Todo ok",
        user
    });
});
exports.getAllUsers = getAllUsers;
const getUserByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario } = req.params;
    const user = yield user_1.default.findOne({ usuario: usuario });
    res.json({
        msj: "Todo ok",
        user
    });
});
exports.getUserByName = getUserByName;
