import { PrismaClient } from '@prisma/client'
import { prismaClient } from '../config/prismaClient'
import { ICategory } from '../interfaces/ICategory'

export class CategoryRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = prismaClient
  }

  async index(){
    const categories = await this.prisma.category.findMany()

    return categories
  }

  async create({ name, icon }: ICategory) {
    const category = await this.prisma.category.create({
      data: {
        name,
        icon
      }})

    return category
  }

}
