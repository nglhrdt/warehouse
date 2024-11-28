import { Router } from 'express';
import healthCheck from './health-check';
import product from './product';
import organizer from './organizer';

const router = Router();

router.use('/health', healthCheck);
router.use('/product', product);
router.use('/organizer', organizer);

export default router;