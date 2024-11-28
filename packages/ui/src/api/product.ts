import { CreateProductDTO, ProductDTO } from 'api';

const baseUrl = 'http://localhost:5000/api/v1';
const productsUrl = `${baseUrl}/product`;

const getAllProducts = (): Promise<ProductDTO[]> => {
  return fetch(productsUrl).then((res) => res.json());
};

const createProduct = (product: CreateProductDTO): Promise<string> => {
  return fetch(productsUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  }).then((res) => res.json());
};

const deleteProduct = (id: string): Promise<void> => {
  return fetch(`${productsUrl}/${id}`, {
    method: 'DELETE',
  }).then((res) => res.json());
};

export default {
  createProduct,
  deleteProduct,
  getAllProducts,
};
