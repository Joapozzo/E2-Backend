import { Router } from "express";

import { createUser, getAllUsers, getUserByName } from "../controllers/cUser";

const router = Router();

router.post('/', createUser)
router.get('/', getAllUsers)
router.get('/:usuario', getUserByName)

export default router