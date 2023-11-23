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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const rUser_1 = __importDefault(require("../routes/rUser"));
const rGasto_1 = __importDefault(require("../routes/rGasto"));
const config_1 = require("../database/config");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.middlewares();
        this.conexionaDB();
        this.routes();
    }
    conexionaDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.conectarDB)();
        });
    }
    routes() {
        this.app.use('/users', rUser_1.default);
        this.app.use('/gastos', rGasto_1.default);
    }
    middlewares() {
        this.app.use(express_1.default.json());
    }
    listen() {
        this.app.listen(8080, () => {
            console.log("Corriendo en el puerto 8080");
        });
    }
}
exports.Server = Server;
