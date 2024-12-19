import { Request, Response } from 'express';
import StorageUnit from '../models/storage-unit';
import toDTO from '../utils/storage-unit-mapper';

function getAll() {
  return (req: Request, res: Response) => {
    StorageUnit.find().then((storageUnits) => {
      res.status(200).json(storageUnits.map(toDTO));
    });
  };
}

function create() {
  return (req: Request, res: Response) => {
    const { name, columns, rows } = req.body;

    const storageUnit = new StorageUnit({ name, columns, rows });

    storageUnit.save().then(() => {
      res.status(201).json({ message: 'Storage unit created successfully' });
    });
  };
}

function deleteStorageUnit() {
  return (req: Request, res: Response) => {
    const { id } = req.params;

    StorageUnit.findByIdAndDelete(id)
      .then(() => {
        res.status(200).json({ message: 'Storage unit deleted successfully' });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to delete storage unit' });
      });
  };
}

export default { create, getAll, deleteStorageUnit };
