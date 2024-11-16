import { CreateProductDTO, ProductDTO } from 'api';

const getAllProducts = (): Promise<ProductDTO[]> => {
  return fetch('http://localhost:5000/api/v1/products').then((res) => res.json());
};

const createProduct = (product: CreateProductDTO): Promise<string> => {
  return fetch('http://localhost:5000/api/v1/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  }).then((res) => res.json());
};

const deleteProduct = (id: string): Promise<void> => {
  return fetch(`http://localhost:5000/api/v1/products/${id}`, {
    method: 'DELETE',
  }).then((res) => res.json());
};

export default {
  createProduct,
  deleteProduct,
  getAllProducts,
};
