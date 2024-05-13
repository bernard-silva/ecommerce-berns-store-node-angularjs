import { Router } from 'express'
import { SessionController } from '../controllers/session.controller.js'

export const sessionRouter = Router()
const sessionController = new SessionController()

sessionRouter.post('/', sessionController.login)