import express from "express";
import { getAdmin } from "../Controllers/adminController";
const router = express.Router()

router.get('/:id', getAdmin)
export default router;