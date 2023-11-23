import { Router } from "express";

import { createGasto, getAllGastos } from "../controllers/cGasto";

const router = Router()

router.post('/', createGasto)
router.get('/', getAllGastos)

export default router