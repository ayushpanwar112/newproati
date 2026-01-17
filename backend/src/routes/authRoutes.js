import express from "express"
import { loginUser, refreshAccessToken } from "../controllers/auth/authentication.controller.js";

const authRoute = express.Router();





authRoute.route("/login" ,  loginUser)
authRoute.route("/refresh-token" , refreshAccessToken )


export default authRoute;