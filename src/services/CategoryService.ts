import { ICategory } from '../interfaces/ICategory'
import { CategoryRepository } from '../repositories/CategoryRepository'
import { ProductRepository } from '../repositories/ProductRepository'

export class CategoryService {

  private categoryRepository: CategoryRepository
  private productRepository: ProductRepository

  constructor(){
    this.categoryRepository = new CategoryRepository()
    this.productRepository = new ProductRepository()
  }

  async index(){

    const categories = await this.categoryRepository.index()

    return categories
  }

  async listProductsByCategory(categoryId: number){
    const result = await this.productRepository.listProductsByCategory(categoryId)

    return result
  }

  async create(category: ICategory){

    const result = await this.categoryRepository.create(category)

    return result
  }
}
