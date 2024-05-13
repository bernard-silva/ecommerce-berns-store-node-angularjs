import { UsersRepository } from "../repositories/users.repository.js";

export class UsersController {
    static instance;

    constructor() {
        this.repository = new UsersRepository();
    }
    createUser = async (req, res) => {
        const user = req.body;

        const createdUser = await this.repository.createUser(user)

        return res.json(createdUser)
    }

    getUser = async (req, res) => {
        const id = req.user.userId;

        const user = await this.repository.getUser(id)

        return res.json(user)
    }

    getUsers = async (req, res) => {
        const users = await this.repository.getUsers()

        return res.json(users)
    }

    updateUser = async (req, res) => {
        const id = req.user.userId;
        const user = req.body

        const userUpdated = await this.repository.updateUser({ id, ...user })

        return res.json(userUpdated)
    }

    deleteUser = async (req, res) => {
        const id = req.user.userId;

        await this.repository.deleteUser(id)

        return res.json({ ok: true })
    }
}
