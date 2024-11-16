import { Request, Response } from 'express';
import Product from '../models/product';
import mapProduct from '../utils/product-mapper';

function getAll() {
  return (req: Request, res: Response) => {
    Product.find()
      .then((products) => {
        res.status(200).json(products.map(mapProduct));
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to fetch products' });
      });
  };
}

function create() {
  return (req: Request, res: Response) => {
    const { name, url } = req.body;

    const product = new Product({ name, url });

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

function deleteProduct() {
  return (req: Request, res: Response) => {
    const { id } = req.params;

    Product.findByIdAndDelete(id)
      .then(() => {
        res.status(200).json({ message: 'Product deleted successfully' });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to delete product' });
      });
  };
}

export default { create, getAll, deleteProduct };
