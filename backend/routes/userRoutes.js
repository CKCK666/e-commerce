import express from "express";
const router = express.Router();
import {UserAuth,getProfile,UserSignUP,updateUserProfile} from "../controllers/userController.js"
import protect from "../middlewares/authMiddleware.js";

//signUp
router.post("/",UserSignUP)



// login
router.post("/login",UserAuth)

// /profile
router.route("/profile").get(protect,getProfile).put(protect,updateUserProfile)



export default router