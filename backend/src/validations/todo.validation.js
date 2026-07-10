import { z } from 'zod';

//validar criacao da tarefa
export const createTodoSchema = z.object({
  body: z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  completed: z.boolean().optional(),
  })
});
//valida atualizacao da tarefa
export const updateTodoSchema = z.object({
  body: z.object({
    title: z.string().min(1, 'Título é obrigatório').optional(),
    completed: z.boolean().optional(),
  }),
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID deve ser um número'),
  }),
});
//validar ID
export const idParamSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID deve ser um número válido'),
  }),
})
