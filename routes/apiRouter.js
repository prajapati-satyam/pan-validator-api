import { Router } from "express";
import panValidation from "../controllers/apiControl.js";
 
const router = Router()
router.get('/', (req, res)=> {
   res.send("<h2>you are on /api router </h2>")
})

router.get('/:panNumber', panValidation)

export default router;