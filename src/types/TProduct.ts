import { Prisma } from '@prisma/client'

export interface TProduct {
  name: string
  description: string
  image: string
  price: Prisma.Decimal
  categoryId: number
}
