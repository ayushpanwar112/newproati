import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { Registration } from "../models/Registration.js";

export const isAuthenticated = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new ErrorHandler("Please login to access this resource", 401));
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = await Registration.findById(decoded.id);
    next();
  } catch (error) {
    return next(new ErrorHandler("Invalid or expired access token", 401));
  }
});
