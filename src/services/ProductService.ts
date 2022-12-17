import { IProduct } from '../interfaces/IProduct'
import { ProductRepository } from '../repositories/ProductRepository'
import { TProduct } from '../types/TProduct'
import { excludingField } from './ExcludingField'

export class ProductService {

  private productRepository: ProductRepository

  constructor(){
    this.productRepository = new ProductRepository()
  }

  async index(){
    const result = await this.productRepository.index()

    return result
  }

  async create(product: TProduct){

    const result = await this.productRepository.create(product)

    const dto = excludingField(result,['createdAt','updatedAt'])

    return dto
  }


}
