import { Router } from "express"; 
import {healthCheck} from "../controllers/healthCheck.controllers.js"

const router = Router()
// router.route("/").get(healthCheck)
router.get("/",healthCheck)

export default router