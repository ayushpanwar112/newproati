import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import registrationRoutes from './routes/registrationRoutes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

// Global middleware
app.use(helmet())
app.use(cors({ origin: true }))
app.use(express.json())
app.use(morgan('dev'))

// Health check
app.get('/health', (_req, res) => {
  res.send({ status: 'ok', uptime: process.uptime() })
})

// API routes
app.use('/form', registrationRoutes)

app.get("/", (req, res) => {
  res.send("Hello from server ");
});


// Start server after DB connects
async function start() {
  try {
    await connectDB()
    app.listen(PORT, () => {
      console.log(`✅ Server running at http://localhost:${PORT}`)
    })
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB:', err.message)
    process.exit(1)
  }
}

start()
