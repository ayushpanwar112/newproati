import mongoose from 'mongoose'

const registrationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    organization: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
    designation: { type: String, required: true },
    experience: { type: String },
    specialization: { type: String }
  },
  { timestamps: true }
)

registrationSchema.index({ email: 1 }, { unique: false })

export const Registration = mongoose.model('Registration', registrationSchema)
