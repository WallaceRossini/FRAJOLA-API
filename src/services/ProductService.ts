import { IProduct } from '../interfaces/IProduct'
import { ProductRepository } from '../repositories/ProductRepository'

export class ProductService {

  private productRepository: ProductRepository

  constructor(){
    this.productRepository = new ProductRepository()
  }

  async create(product: IProduct){

    const result = await this.productRepository.create(product)

    return result
  }


}
