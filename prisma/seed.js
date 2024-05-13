import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.user.upsert({
        where: {
            email: 'bernard@email.com'
        },
        create: {
            name: 'Bernard Silva',
            email: 'bernard@email.com',
            password: '123456',
            admin: true,
        },
        update: {}
    })

    await prisma.product.upsert({
        where: { id: 1, },
        update: {},
        create: {
            name: 'Notebook',
            description: 'i7 11Gen, 16Gb RAM, 240GB SSD',
            price: 6000,
            imageUrl: 'https://p1-ofp.static.pub//medias/24157957128_CG_202112301038011709869541675.png'
        }
    })

    await prisma.product.upsert({
        where: { id: 2, },
        update: {},
        create: {
            name: 'Mouse G Pro',
            description: 'Mouse G Pro cabo USB',
            price: 250,
            imageUrl: 'https://contigo.uol.com.br/media/uploads/legacy/2020/02/12/15-itens-de-computador-e-informatica-que-voce-nao-pode-ficar-sem-1218298.png'
        }
    })

    await prisma.product.upsert({
        where: { id: 3, },
        update: {},
        create: {
            name: 'PC Gamer',
            description: 'Ryzen7, 16GB RAM, RTX 4060 8GB',
            price: 9500,
            imageUrl: 'https://cdn.dooca.store/559/products/pcgc03-e-5_640x640+fill_ffffff.png?v=1671125504&webp=0'
        }
    })

    await prisma.product.upsert({
        where: { id: 4, },
        update: {},
        create: {
            name: 'Headset Redragon',
            description: 'Headset Redragon Gamer Preto',
            price: 150,
            imageUrl: 'https://cdn.awsli.com.br/2500x2500/1318/1318167/produto/139818943/e250672186.jpg'
        }
    })

    await prisma.product.upsert({
        where: { id: 5, },
        update: {},
        create: {
            name: 'SSD 240GB',
            description: 'SSD 240GB Sandisk',
            price: 120,
            imageUrl: 'https://images.kabum.com.br/produtos/fotos/80632/80632_index_gg.jpg'
        }
    })

    await prisma.product.upsert({
        where: { id: 6, },
        update: {},
        create: {
            name: 'Teclado Gamer',
            description: 'Teclado Gamer Mecânico Led Rgb',
            price: 150,
            imageUrl: 'https://images.tcdn.com.br/img/img_prod/745260/teclado_gamer_semi_mecanico_led_rgb_abnt2_usb_pc_ps4_xbox_67_1_d5520f952b2ee293ee340c520427101e.jpg'
        }
    })

    await prisma.product.upsert({
        where: { id: 7, },
        update: {},
        create: {
            name: 'Placa GTX 1050 4GB',
            description: 'Placa de Video Geforce Nvidia',
            price: 950,
            imageUrl: 'https://www.lognetinfo.com.br/imagens/original/21564A.jpg'
        }
    })

    await prisma.product.upsert({
        where: { id: 8, },
        update: {},
        create: {
            name: 'Memória RAM HyperX',
            description: 'Memória RAM HyperX 16GB',
            price: 300,
            imageUrl: 'https://cdn.awsli.com.br/800x800/1742/1742668/produto/75792503/131ab54c78.jpg'
        }
    })

}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
    process.exit()
})