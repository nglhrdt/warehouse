import { Router } from 'express';
import healthCheck from './healthCheck';

const router = Router();

router.use('/health', healthCheck);

export default router;