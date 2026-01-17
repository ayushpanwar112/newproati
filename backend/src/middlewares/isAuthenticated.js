import jwt from "jsonwebtoken";
import { generateAccessAndRefreshTokens } from "../utils/jwtToken.js";
import { Registration } from "../models/Registration.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import ErrorHandler from "../utils/ErrorHandler.js";

// Helper to set cookies separately (keeping logic clean)
const setAuthCookies = (res, accessToken, refreshToken) => {
  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "None",
    path: "/",
  };
  res.cookie("accessToken", accessToken, { ...options, maxAge: 24 * 60 * 60 * 1000 });
  res.cookie("refreshToken", refreshToken, { ...options, maxAge: 7 * 24 * 60 * 60 * 1000 });
};

export const isAuthenticated = asyncHandler(async (req, res, next) => {
  const accessToken =
    (req.headers.authorization?.startsWith("Bearer ")
      ? req.headers.authorization.split(" ")[1]
      : null) || req.cookies?.accessToken;

  const refreshToken = req.cookies?.refreshToken || 
    (req.headers["x-refresh-token"]); 

  // 2. If absolutely no access token, check if we can refresh immediately
  if (!accessToken) {
    if (refreshToken) return await handleAutoRefresh(refreshToken, req, res, next);
    return next(new ErrorHandler("Please login to access this resource", 401));
  }

  try {
    // 3. Try verifying Access Token
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    req.user = await Registration.findById(decoded.id);
    return next();
  } catch (error) {
    // 4. If Access Token is expired, try Auto-Refresh using Refresh Token
    if (error.name === "TokenExpiredError" && refreshToken) {
      console.log("generating new token due to expiration")
      return await handleAutoRefresh(refreshToken, req, res, next);
    }
    
    
    return next(new ErrorHandler("Session invalid. Please login again.", 401));
  }
});

// Internal function to handle the refresh logic within the middleware
async function handleAutoRefresh(refreshToken, req, res, next) {
  try {
    // Verify the Refresh Token
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await Registration.findById(decoded.id);

    // Security: Check if user exists and token matches database
    if (!user || user.refreshToken !== refreshToken) {
      return next(new ErrorHandler("Session expired. Please login again.", 401));
    }

    // Generate new pair
    const tokens = generateAccessAndRefreshTokens(user._id);

    // Update Database
    user.refreshToken = tokens.refreshToken;
    await user.save({ validateBeforeSave: false });

    // SET NEW COOKIES SEPARATELY
    setAuthCookies(res, tokens.accessToken, tokens.refreshToken);

    // Attach user to request and move to the next middleware/controller
    req.user = user;
    next();
  } catch (err) {
    return next(new ErrorHandler("Session expired. Please login again.", 401));
  }
}