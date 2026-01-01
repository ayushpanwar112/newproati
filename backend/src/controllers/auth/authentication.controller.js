import { Registration } from "../../models/Registration";
import { asyncHandler } from "../../utils/asyncHandler";
import ErrorHandler from "../../utils/ErrorHandler";
import { generateAccessAndRefreshTokens } from "../../utils/jwtToken";
import bcrypt from  "bcryptjs" 
export const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await Registration.findOne({ email });
  if (!user) return next(new ErrorHandler("Invalid credentials", 401));

  // COMPARISON OUTSIDE: Done here
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return next(new ErrorHandler("Invalid credentials", 401));

  // Generate new tokens
  const { accessToken, refreshToken } = generateAccessAndRefreshTokens(user._id);

  // SESSION MANAGEMENT: Save refresh token to DB. 
  // If user logs in elsewhere, this token is replaced, kicking out the old session.
  user.refreshToken = refreshToken;
  await user.save();

  res.status(200).json({
    success: true,
    accessToken,
    refreshToken,
    user: { id: user._id, name: user.name, email: user.email }
  });
});



export const refreshAccessToken = asyncHandler(async (req, res, next) => {
  const { token } = req.body; // Flutter will send the refresh token here

  if (!token) return next(new ErrorHandler("Refresh token required", 401));

  const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
  const user = await Registration.findById(decoded.id);

  // If token in DB doesn't match the one sent, someone else logged in
  if (!user || user.refreshToken !== token) {
    return next(new ErrorHandler("Session expired or logged in elsewhere", 403));
  }

  const tokens = generateAccessAndRefreshTokens(user._id);
  user.refreshToken = tokens.refreshToken;
  await user.save();

  res.status(200).json({
    success: true,
    accessToken: tokens.accessToken,
    refreshToken: tokens.refreshToken
  });
});
