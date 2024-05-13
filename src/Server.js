import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { usersRouter } from './routes/users.route.js'
import { sessionRouter } from './routes/session.route.js'
import { productsRouter } from './routes/products.route.js'
import { cartsRouter } from './routes/carts.route.js'

export class Server {
    constructor(port) {
        this.app = express()

        this.setMiddlewares()

        this.setRoutes()

        this.listen(port)
    }

    setMiddlewares() {
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(bodyParser.json())
        this.app.use(cors({ origin: '*' }))
    }

    setRoutes() {
        this.app.use(express.static('public'))
        this.app.use('/api/users', usersRouter)
        this.app.use('/api/products', productsRouter)
        this.app.use('/api/carts', cartsRouter)
        this.app.use('/api/session', sessionRouter)
    }

    listen(port) {
        this.app.listen(port, () => {
            console.log("App started. Listen at port " + port)
        })
    }
}
