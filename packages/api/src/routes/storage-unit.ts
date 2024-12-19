import { Router } from 'express';
import storageUnit from '../controllers/storage-unit';

const router = Router();

router.post('/', storageUnit.create());
router.get('/', storageUnit.getAll());
router.delete('/:id', storageUnit.deleteStorageUnit());

export default router;