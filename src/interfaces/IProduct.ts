import { Prisma } from '@prisma/client'
export interface IProduct {
  name: string
  description: string
  image: string
  price: Prisma.Decimal
  categoryId: number
}
