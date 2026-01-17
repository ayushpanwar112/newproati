import { Registration } from "../models/Registration.js"
import bcrypt from 'bcryptjs'

export async function createRegistration(req, res) {
  try {
    const {
      name,
      email,
      password,
      instituation,
      country,
      state,
      city,
      foodper,
      phone,
      altphone,
      cate,
      regFee,
      paymentmode,
      trnsNo,
      designation,
      memberId,
      studentId,
    } = req.body || {}

    const missing = []
    if (!name) missing.push('name')
    if (!email) missing.push('email')
    if (!password) missing.push('password')
    if (!instituation) missing.push('instituation')
    if (!country) missing.push('country')
    if (!state) missing.push('state')
    if (!city) missing.push('city')
    if (!foodper) missing.push('foodper')
    if (!cate) missing.push('cate')
    if (!regFee) missing.push('regFee')
    if (!paymentmode) missing.push('paymentmode')
    if (!trnsNo) missing.push('trnsNo')
    if (!designation) missing.push('designation')

    if (cate === 'ARTTI MEMBER' && !memberId) {
      missing.push('ARTTI Member ID')
    }
    if (cate === 'student' && !studentId) {
      missing.push('Student ID')
    }
    

    if (missing.length) {
      return res.status(400).json({ error: `Missing required fields: ${missing.join(', ')}` })
    }

    const passwordHash = await bcrypt.hash(String(password), 10)

    const paymentScreenshotUrl = req.file
      ? `/uploads/payments/${req.file.filename}`
      : undefined

    const doc = await Registration.create({
      name,
      email,
      password: passwordHash,
      instituation,
      country,
      state,
      city,
      foodper,
      phone,
      altphone,
      cate,
      regFee,
      paymentmode,
      trnsNo,
      paymentScreenshotUrl,
      designation,
      memberId: cate === 'ARTTI MEMBER' ? memberId : undefined,
      studentId: cate === 'student' ? studentId : undefined,
    })

    return res.status(201).json({ message: 'Registered successfully', id: doc._id, paymentScreenshotUrl })
  } catch (err) {
    console.error('Registration error:', err)
    const code = err?.code === 11000 ? 409 : 500
    res.status(code).json({ error: err?.message || 'Server error' })
  }
}

export async function listRegistrations(_req, res) {
  try {
    const docs = await Registration.find().sort({ createdAt: -1 }).lean()
    res.json(docs)
  } catch (err) {
    res.status(500).json({ error: err?.message || 'Server error' })
  }
}

