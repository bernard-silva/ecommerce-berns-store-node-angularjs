import { PrismaClient } from "@prisma/client"

export class UsersRepository {
    constructor() {
        this.prisma = new PrismaClient()
    }

    async createUser({ name, email, password }) {
        const user = await this.prisma.user.create({
            data: {
                name,
                email,
                password,
            }
        })

        return user
    }

    async getUser(id) {
        const user = await this.prisma.user.findUnique({
            where: { id }
        })

        return user
    }

    async getUsers() {
        const users = await this.prisma.user.findMany()

        return users
    }

    async getUserByEmail(email) {
        const user = await this.prisma.user.findUnique({ where: { email } })

        return user
    }

    async updateUser({ id, name, email, password }) {
        const user = await this.prisma.user.update({
            where: {
                id
            },
            data: {
                name,
                email,
                password,
            }
        })

        return user
    }

    async deleteUser(id) {
        await this.prisma.user.delete({ where: { id } })
    }
}
