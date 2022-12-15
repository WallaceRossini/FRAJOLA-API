import { PrismaClient } from '@prisma/client'
import { prismaClient } from '../config/prismaClient'

import { TProduct } from '../types/TProduct'

export class ProductRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = prismaClient
  }

  async index() {
    const products = await this.prisma.product.findMany({ orderBy: { name: 'asc' } })

    return products
  }

  async listProductsByCategory(categoryId: number) {
    const products = await this.prisma.product.findMany({ where: { categoryId }, orderBy: { name: 'asc' } })

    return products
  }

  async create({ name, description, image, price, categoryId }: TProduct) {

    const product = await this.prisma.product.create({
      data: {
        name,
        description,
        image,
        price: parseFloat(String(price)),
        categoryId: Number(categoryId)
      }
    })

    return product
  }
}
