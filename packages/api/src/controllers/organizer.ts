import { Request, Response } from 'express';
import Organizer from '../models/organizer';
import toDTO from '../utils/organizer-mapper';
import Product from '../models/product';

function getAll() {
  return (req: Request, res: Response) => {
    Organizer.find()
      .then((organizers) => {
        res.status(200).json(organizers.map(toDTO));
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to fetch organizers' });
      });
  };
}

function create() {
  return (req: Request, res: Response) => {
    const { name, columns, rows } = req.body;

    const organizer = new Organizer({ name, columns, rows });

    organizer
      .save()
      .then(() => {
        res.status(201).json({ message: 'Organizer created successfully' });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to create organizer' });
      });
  };
}

function deleteOrganizer() {
  return (req: Request, res: Response) => {
    const { id } = req.params;

    Organizer.findByIdAndDelete(id)
      .then(() => {
        res.status(200).json({ message: 'Organizer deleted successfully' });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to delete organizer' });
      });
  };
}

function addProductToOrganizer() {
  return (req: Request, res: Response) => {
    const { column, row, quantity } = req.body;
    const { organizerId, productId } = req.params;

    console.log('organizerId', organizerId);
    console.log('productId', productId);
    console.log('column', column);
    console.log('row', row);
    console.log('quantity', quantity);
    console.log('req.body', req.body);
    console.log('req.params', req.params);

    Organizer.findById(organizerId)
      .then((organizer) => {
        if (!organizer) {
          res.status(404).json({ error: 'Organizer not found' });
          return;
        }
        Product.findById(productId)
        .then((product) => {
            console.log(JSON.stringify(organizer));
            console.log(JSON.stringify(product));
            if (!product) {
              res.status(404).json({ error: 'Product not found' });
              return;
            }
            organizer?.products.push({ product, column: 0, row: 0, quantity: 1 });
            organizer
              ?.save()
              .then(() => {
                res.status(200).json({ message: 'Product added to organizer successfully' });
              })
              .catch((error) => {
                console.log(error);
                res.status(500).json({ error: 'Failed to add product to organizer' });
              });
          })
          .catch((error) => {
            console.log(error);
            res.status(500).json({ error: 'Failed to add product to organizer' });
          });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: 'Failed to add product to organizer' });
      });
  };
}

export default { addProductToOrganizer, create, getAll, deleteOrganizer };
