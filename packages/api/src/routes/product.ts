import { Router } from 'express';
import products from '../controllers/product';

const router = Router();

router.post('/', products.create());
router.get('/', products.getAll());
router.delete('/:id', products.deleteProduct());

export default router;


