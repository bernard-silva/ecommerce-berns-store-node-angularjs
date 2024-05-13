import { Router } from 'express'
import { authenticationMiddleware } from '../middlewares/authentication.middleware.js'
import { adminCheckMiddleware } from '../middlewares/admin-check.middleware.js'
import { CartsController } from '../controllers/carts.controller.js'

export const cartsRouter = Router()
const cartsController = new CartsController()

cartsRouter.get('/closed', authenticationMiddleware, cartsController.getCarts)
cartsRouter.post('/', authenticationMiddleware, cartsController.createCart)
cartsRouter.get('/', authenticationMiddleware, cartsController.getCart)
cartsRouter.patch('/', authenticationMiddleware, cartsController.updateCart)
cartsRouter.delete('/:productId', authenticationMiddleware, cartsController.deleteCart)