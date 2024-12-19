import { Router } from 'express';
import healthCheck from './health-check';
import product from './product';
import storageUnit from './storage-unit';

const router = Router();

router.use('/health', healthCheck);
router.use('/product', product);
router.use('/storage-unit', storageUnit);

export default router;