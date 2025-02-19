import { Router } from "express";
import { addToHistory, getUserHistory, login, register } from "../controllers/user.controller";

const router = Router();

router.post("/register" , register);
router.post("/login",login);
router.post("/add_to_activity" ,addToHistory);
router.get("/get_all_activity",getUserHistory);




export default router;