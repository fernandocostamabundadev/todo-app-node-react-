import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

//Importar as rotas
import todoRoutes from './router/todo.routes';

dotenv.config();

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//rota teste
app.get('/',(req, res)=>{
  res.status(200).json({message:'ok'})
})

//rota do todo
app.use('/api/todo', todoRoutes);

export default app;
