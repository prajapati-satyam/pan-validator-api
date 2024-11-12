import { Router } from "express";
import panValidation from "../controllers/apiControl.js";
 
const router = Router()

router.get('/:panNumber', panValidation)

export default router;