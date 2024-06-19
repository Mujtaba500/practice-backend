import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controller/user.controller.js";
import upload from "../middleware/multer.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

userRouter.route("/login").post(loginUser);

userRouter.route("/logout").post(verifyToken, logoutUser);

export default userRouter;
