import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import jwt from "jsonwebtoken";
import user from "../models/user/user.model.js";

export const verifyToken = asyncHandler(async (req, _, next) => {
  try {
    const token =
      // req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const User = await user
      .findById(decodedToken?._id)
      .select("-password -refreshToken");

    if (!User) {
      // NEXT_VIDEO: discuss about frontend
      throw new ApiError(401, "Invalid Access Token");
    }

    req.user = User;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }
});
