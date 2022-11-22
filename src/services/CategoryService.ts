import { ICategory } from '../interfaces/ICategory'
import { CategoryRepository } from '../repositories/CategoryRepository'

export class CategoryService {

  private categoryRepository: CategoryRepository

  constructor(){
    this.categoryRepository = new CategoryRepository()
  }

  async index(){

    const categories = await this.categoryRepository.index()

    return categories
  }

  async create(category: ICategory){

    const result = await this.categoryRepository.create(category)

    return result
  }
}
