"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cGasto_1 = require("../controllers/cGasto");
const router = (0, express_1.Router)();
router.post('/', cGasto_1.createGasto);
router.get('/', cGasto_1.getAllGastos);
exports.default = router;
