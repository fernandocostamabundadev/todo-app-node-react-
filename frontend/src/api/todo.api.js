import api from './axios.js';

export const todoApi = {
  // Listar todas as tarefas
  getAll: () => api.get('/todo'),

  // Buscar por ID
  getById: (id) => api.get(`/todo/${id}`),

  // Criar
  create: (data) => api.post('/todo', data),

  // Atualizar
  update: (id, data) => api.put(`/todo/${id}`, data),

  // Alternar status
  toggle: (id) => api.patch(`/todo/${id}`),

  // Deletar
  delete: (id) => api.delete(`/todo/${id}`),
};
