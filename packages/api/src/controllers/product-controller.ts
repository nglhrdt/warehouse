import { Request, Response } from 'express';
import Product from '../schemas/product-schema';

function getAll() {
  return (req: Request, res: Response) => {
    Product.find()
      .then((products) => {
        res.status(200).json(products);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to fetch products' });
      });
  };
}

function create() {
  return (req: Request, res: Response) => {
    const { name } = req.body;

    const product = new Product({ name });

    product
      .save()
      .then(() => {
        res.status(201).json({ message: 'Product created successfully' });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to create product' });
      });
  };
}
export default { create, getAll };
