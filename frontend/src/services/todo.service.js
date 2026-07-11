import { todoApi } from '../api/todo.api.js';

export const todoService = {
  async getAll() {
    try {
      const response = await todoApi.getAll();
      return response.data.data;
    } catch (error) {
      throw new Error(error.message || 'Erro ao carregar tarefas');
    }
  },

  async create(data) {
    try {
      const response = await todoApi.create(data);
      return response.data.data;
    } catch (error) {
      throw new Error(error.message || 'Erro ao criar tarefa');
    }
  },

  async update(id, data) {
    try {
      const response = await todoApi.update(id, data);
      return response.data.data;
    } catch (error) {
      throw new Error(error.message || 'Erro ao atualizar tarefa');
    }
  },

  async toggle(id) {
    try {
      const response = await todoApi.toggle(id);
      return response.data.data;
    } catch (error) {
      throw new Error(error.message || 'Erro ao alternar status');
    }
  },

  async delete(id) {
    try {
      await todoApi.delete(id);
      return true;
    } catch (error) {
      throw new Error(error.message || 'Erro ao deletar tarefa');
    }
  },
};
