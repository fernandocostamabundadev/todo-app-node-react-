import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger.config.js';

import todoRoutes from './router/todo.routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// 📚 Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'ok' });
});

app.use('/api/todo', todoRoutes);

export default app;
