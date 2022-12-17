import { Request, Response } from 'express'
import { ICategory } from '../interfaces/ICategory'
import { CategoryService } from '../services/CategoryService'

const categoryService = new CategoryService()

export class CategoryController {

  async index(request: Request, response: Response){

    const categories = await categoryService.index()

    return response.status(200).json(categories)
  }

  async listProductsByCategory(request: Request, response: Response){
    const {categoryId } = request.params

    const products = await categoryService.listProductsByCategory(Number(categoryId))

    return response.status(200).json(products)
  }

  async create(request: Request, response: Response){
    const body: ICategory = request.body

    const category = await categoryService.create(body)

    return response.status(201).json(category)
  }
}
