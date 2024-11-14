import { Router } from 'express';
import healthCheck from './health-check';
import products from './product';

const router = Router();

router.use('/health', healthCheck);
router.use('/products', products);

export default router;