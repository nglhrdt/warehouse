import { ProductDTO } from 'api';
import Product from '../models/product';

function toDTO(product: Product): ProductDTO {
  return {
    id: product._id.toString(),
    name: product.name,
    url: product.url,
  };
}

export default toDTO;
