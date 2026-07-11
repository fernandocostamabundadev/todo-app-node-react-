import { Router } from 'express';
import {
  getAllTodos,
  createTodo,
  updateTodo,
  toggleTodo,
  deleteTodo,
} from '../controllers/todo.controller.js';
import { validate } from '../middlewares/validation.middlewares.js';
import {
  createTodoSchema,
  updateTodoSchema,
  idParamSchema,
} from '../validations/todo.validation.js';

const router = Router();

/**
 * @swagger
 * /api/todo:
 *   get:
 *     summary: Listar todas as tarefas
 *     description: Retorna uma lista com todas as tarefas cadastradas
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: Lista de tarefas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Todo'
 */
router.get('/', getAllTodos);

/**
 * @swagger
 * /api/todo:
 *   post:
 *     summary: Criar uma nova tarefa
 *     description: Adiciona uma nova tarefa à lista
 *     tags: [Todos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateTodoInput'
 *     responses:
 *       201:
 *         description: Tarefa criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   $ref: '#/components/schemas/Todo'
 *       400:
 *         description: Erro de validação
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post('/', validate(createTodoSchema), createTodo);

/**
 * @swagger
 * /api/todo/{id}:
 *   get:
 *     summary: Buscar uma tarefa por ID
 *     description: Retorna uma tarefa específica baseada no ID fornecido
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da tarefa
 *     responses:
 *       200:
 *         description: Tarefa encontrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   $ref: '#/components/schemas/Todo'
 *       404:
 *         description: Tarefa não encontrada
 */
router.get('/:id', getAllTodos);

/**
 * @swagger
 * /api/todo/{id}:
 *   put:
 *     summary: Atualizar uma tarefa
 *     description: Atualiza os dados de uma tarefa existente
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da tarefa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateTodoInput'
 *     responses:
 *       200:
 *         description: Tarefa atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   $ref: '#/components/schemas/Todo'
 *       404:
 *         description: Tarefa não encontrada
 */
router.put('/:id', validate(updateTodoSchema), updateTodo);

/**
 * @swagger
 * /api/todo/{id}:
 *   patch:
 *     summary: Alternar status da tarefa
 *     description: Marca ou desmarca uma tarefa como concluída
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da tarefa
 *     responses:
 *       200:
 *         description: Status alterado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   $ref: '#/components/schemas/Todo'
 *       404:
 *         description: Tarefa não encontrada
 */
router.patch('/:id', validate(idParamSchema), toggleTodo);

/**
 * @swagger
 * /api/todo/{id}:
 *   delete:
 *     summary: Deletar uma tarefa
 *     description: Remove uma tarefa permanentemente
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da tarefa
 *     responses:
 *       204:
 *         description: Tarefa deletada com sucesso (sem corpo de resposta)
 *       404:
 *         description: Tarefa não encontrada
 */
router.delete('/:id', validate(idParamSchema), deleteTodo);

export default router;
