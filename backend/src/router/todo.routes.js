import { Router } from 'express';
import { getAllTodos, createTodo, updateTodo, toggleTodo, deleteTodo } from '../controllers/todo.controller.js';
import { validate } from '../middlewares/validation.middlewares.js';
import { createTodoSchema, updateTodoSchema, idParamSchema } from '../validations/todo.validation.js';

const router = Router();

router.get('/', getAllTodos);
router.post('/', validate(createTodoSchema), createTodo);
router.put('/:id', validate(updateTodoSchema), updateTodo);
router.patch('/:id', validate(idParamSchema), toggleTodo);
router.delete('/:id', validate(idParamSchema), deleteTodo);

export default router;
