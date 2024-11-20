import { Router } from 'express';
import organizers from '../controllers/organizer';

const router = Router();

router.post('/', organizers.create());
router.get('/', organizers.getAll());
router.delete('/:id', organizers.deleteOrganizer());

export default router;