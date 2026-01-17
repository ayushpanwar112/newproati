import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'
import fs from 'node:fs/promises'
import { connectDB } from './config/db.js'
import registrationRoutes from './src/routes/registrationRoutes.js'
import { errorMiddleware } from './src/utils/error.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

const corsOptions = {
  origin: true,
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}

// Global middleware
app.use(helmet())
app.use(cors(corsOptions))
app.options(/.*/, cors(corsOptions))
app.use(express.json())
app.use(morgan('dev'))

// Static files (uploaded payment screenshots)
app.use('/uploads', express.static('uploads'))


// Health check
app.get('/health', (_req, res) => {
  res.send({ status: 'ok', uptime: process.uptime() })
})

// API routes
app.use('/form', registrationRoutes)

app.get("/", (req, res) => {
  res.send("Hello from server ");
});


app.use(errorMiddleware);


// Start server after DB connects
async function start() {
  try {
    await fs.mkdir('uploads/payments', { recursive: true })
    await connectDB()
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`✅ Server running at http://localhost:${PORT}`)
    })
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB:', err.message)
    process.exit(1)
  }
}

start()
