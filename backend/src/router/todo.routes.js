import { Router } from 'express';
import todoController from '../controllers/todo.controller'
import { validation } from '../middlewares/validation.middlewares'
import { createTodoSchema, updateTodoSchema, idParamSchema} from '../validations/todo.validation';

const router = Router();

//listar tarefa
router.get('/',createTodoSchema, todoController.gerAllTodo);
//criar tarefa
router.post('/',updateTodoSchema, todoController.createTodo);
//atualizar toda tarefa
router.put('/:id',idParamSchema, todoController.updateTodo);
//editar tarefa
router.patch('/:id',idParamSchema, todoController.toggleTodo);
//eliminar tarefa
router.delete('/:id',idParamSchema, todoController.deleteTodo);
