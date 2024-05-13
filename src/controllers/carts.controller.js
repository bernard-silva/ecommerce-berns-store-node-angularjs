import { CartsRepository } from "../repositories/carts.repository.js";

export class CartsController {
    static instance;

    constructor() {
        this.repository = new CartsRepository();
    }

    getCarts = async (req, res) => {
        const userId = req.user.userId;

        const carts = await this.repository.getClosedCarts(userId)

        return res.json(carts)
    }

    getCart = async (req, res) => {
        const userId = req.user.userId;

        const product = await this.repository.getCart(userId)

        return res.json(product)
    }

    createCart = async (req, res) => {
        const cart = req.body;
        const userId = req.user.userId;

        const createdCart = await this.repository.createCart({ ...cart, userId })

        return res.json(createdCart)
    }

    updateCart = async (req, res) => {
        const product = req.body
        const userId = req.user.userId;

        const productUpdated = await this.repository.updateCart({ ...product, userId })

        return res.json(productUpdated)
    }

    deleteCart = async (req, res) => {
        const userId = req.user.userId;
        const productId = Number(req.params.productId)

        await this.repository.deleteCartItem({ productId, userId })

        return res.json({ ok: true })
    }
}
