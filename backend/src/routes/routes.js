import { Router } from 'express'; 
import { create } from '../controllers/newsController.js';

const router = Router();

router.get("/news", create);

export default router;