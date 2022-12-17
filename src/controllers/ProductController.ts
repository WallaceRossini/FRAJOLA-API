import { Request, Response } from 'express'
import { ProductService } from '../services/ProductService'

const productService = new ProductService()

export class ProductController {

  async index(request:Request,response: Response){
    const products = await productService.index()

    return response.status(200).json(products)
  }

  async create(request:Request,response: Response){
    const body = request.body
    const image = request.file?.filename

    const product = await productService.create({image,...body})

    return response.status(201).json(product)
  }
}
