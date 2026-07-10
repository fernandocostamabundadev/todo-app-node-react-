import { Router } from 'express';
const router = Router();

import swaggerUi from 'swagger-ui-express';
import swaggerDoc from '../swagger.json';

router.use('/', swaggerUi.serve)
router.get('/', swaggerUi.setup(swaggerDoc));

export default router;


