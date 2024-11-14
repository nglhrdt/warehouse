import { CreateProduct, Product } from '@/types/types';

const getAllProducts = (): Promise<Product[]> => {
  return fetch('http://localhost:5000/api/v1/products').then((res) => res.json());
}

const createProduct = (product: CreateProduct): Promise<string> => {
  return fetch('http://localhost:5000/api/v1/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  }).then((res) => res.json());
};

export default {
  createProduct,
  getAllProducts,
};
