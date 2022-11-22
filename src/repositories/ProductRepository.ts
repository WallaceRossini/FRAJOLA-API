import { PrismaClient } from '@prisma/client'
import { prismaClient } from '../config/prismaClient'
import { IProduct } from '../interfaces/IProduct'

export class ProductRepository {
  private prisma: PrismaClient

  constructor(){
    this.prisma = prismaClient
  }

  async create({name,description,image,price,categoryId}:IProduct){

    const product = await this.prisma.product.create({
      data: {
        name,
        description,
        image,
        price,
        categoryId: Number(categoryId)
      }
    })

    return product
  }
}
