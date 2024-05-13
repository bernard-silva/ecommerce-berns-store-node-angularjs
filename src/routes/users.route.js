import { Router } from 'express'
import { UsersController } from '../controllers/users.controller.js'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js'
import { adminCheckMiddleware } from '../middlewares/admin-check.middleware.js'

export const usersRouter = Router()
const usersController = new UsersController()

usersRouter.post('/', usersController.createUser)
usersRouter.get('/', authenticationMiddleware, usersController.getUser)
usersRouter.get('/all', authenticationMiddleware, adminCheckMiddleware, usersController.getUsers)
usersRouter.patch('/', authenticationMiddleware, usersController.updateUser)
usersRouter.delete('/', authenticationMiddleware, usersController.deleteUser)