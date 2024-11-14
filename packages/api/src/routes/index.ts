import { Router } from 'express';
import healthCheck from './health-check';

const router = Router();

router.use('/health', healthCheck);

export default router;