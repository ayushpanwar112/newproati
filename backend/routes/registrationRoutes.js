import { Router } from 'express'
import { createRegistration, listRegistrations } from '../controllers/registrationController.js'

const router = Router()

router.post('/register', createRegistration)
router.get('/registrations', listRegistrations)

export default router
