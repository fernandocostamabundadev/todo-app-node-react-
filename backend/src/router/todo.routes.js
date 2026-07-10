import { Router } from 'express';
import todoController from '../controllers/todo.controller'

const router = Router();

//listar tarefa
router.get('/',todoController.gerAllTodo);
//criar tarefa
router.post('/',todoController.createTodo);
//atualizar toda tarefa
router.put('/:id',todoController.updateTodo);
//editar tarefa
router.patch('/:id',todoController.toggleTodo);
//eliminar tarefa
router.delete('/:id',todoController.deleteTodo);
