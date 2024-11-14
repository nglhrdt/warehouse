import { Router } from 'express';
import products from '../controllers/product-controller';

const router = Router();

router.post('/', products.create());
router.get('/', products.getAll());

export default router;


