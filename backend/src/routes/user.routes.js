import express from "express";
import userController from "../controller/user.controller.js";
import authenicatedUser from "../middleware/auth.middleware.js";
const userRouter = express.Router();
userRouter.post("/reg", userController.userRegistration);
userRouter.post("/login", userController.userLogin);
userRouter.get("/user", authenicatedUser, userController.getUser);
userRouter.get("/logout", userController.userLogout);
export default userRouter;
