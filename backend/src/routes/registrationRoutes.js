import { Router } from 'express'
import { createRegistration, listRegistrations } from '../controllers/registrationController.js'
import { uploadPaymentScreenshot } from '../middlewares/uploadPaymentScreenshot.js'

const router = Router()

router.post('/register', uploadPaymentScreenshot.single('screenshot'), createRegistration)
router.get('/registrations', listRegistrations)

export default router
