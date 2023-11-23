"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cUser_1 = require("../controllers/cUser");
const router = (0, express_1.Router)();
router.post('/', cUser_1.createUser);
router.get('/', cUser_1.getAllUsers);
router.get('/:usuario', cUser_1.getUserByName);
exports.default = router;
