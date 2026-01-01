import { Registration } from "../models/Registration.js"

export async function createRegistration(req, res) {
  try {
    const { name, email, organization, phone, designation, experience, specialization } = req.body || {}

    if (!name || !email || !organization || !designation) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const doc = await Registration.create({
      name,
      email,
      organization,
      phone,
      designation,
      experience,
      specialization
    })

    return res.status(201).json({ message: 'Registered successfully', id: doc._id })
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
