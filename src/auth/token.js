import { ApiError } from "../utils/ApiError.js";
import user from "../models/user/user.model.js";

const generateAccessAndRefereshTokens = async (userId) => {
  try {
    const User = await user.findById(userId);
    const accessToken = User.generateAccessToken();
    const refreshToken = User.generateRefreshToken();

    User.refreshToken = refreshToken;
    await User.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    console.log(error);
    throw new ApiError(
      500,
      "Something went wrong while generating referesh and access token"
    );
  }
};

export default generateAccessAndRefereshTokens;
