import { Router } from 'express';
import linksRouter from './links.js'; // Importa el router exportado

const router = Router();

router.use('/links', linksRouter); // Usa el router importado

export default router;
