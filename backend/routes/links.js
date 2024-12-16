import { Router } from 'express';
import LinkController from '../controllers/Link.js'; // Asegúrate de que la ruta es correcta

const router = Router();

router.post('/crear', LinkController.create);
router.post('/redirect', LinkController.redirect);

export default router;
