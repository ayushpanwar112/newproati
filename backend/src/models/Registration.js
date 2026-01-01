import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    password: { type: String, required: true, select: false }, // 'select: false' hides password by default

    email: { type: String, required: true, trim: true, lowercase: true },
    organization: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
    designation: { type: String, required: true },
    experience: { type: String },
    specialization: { type: String },
    refreshToken: { type: String }, // Store session token
  },
  { timestamps: true }
);

registrationSchema.index({ email: 1 }, { unique: false });

export const Registration = mongoose.model("Registration", registrationSchema);
