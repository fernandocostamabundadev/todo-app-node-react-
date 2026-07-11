import { createContext, useState, useEffect, useCallback } from 'react';
import { todoService } from '../services/todo.service.js';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editingTodo, setEditingTodo] = useState(null);

  const loadTodos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await todoService.getAll();
      setTodos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  const addTodo = async (data) => {
    try {
      const newTodo = await todoService.create(data);
      setTodos((prev) => [newTodo, ...prev]);
      return newTodo;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const updateTodo = async (id, data) => {
    try {
      const updated = await todoService.update(id, data);
      setTodos((prev) => prev.map((t) => (t.id === id ? updated : t)));
      setEditingTodo(null);
      return updated;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const toggleTodo = async (id) => {
    try {
      const toggled = await todoService.toggle(id);
      setTodos((prev) => prev.map((t) => (t.id === id ? toggled : t)));
      return toggled;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const deleteTodo = async (id) => {
    try {
      await todoService.delete(id);
      setTodos((prev) => prev.filter((t) => t.id !== id));
      if (editingTodo?.id === id) setEditingTodo(null);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const startEditing = (todo) => {
    setEditingTodo(todo);
  };

  const cancelEditing = () => {
    setEditingTodo(null);
  };

  const pendingCount = todos.filter((t) => !t.completed).length;
  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <TodoContext.Provider
      value={{
        todos,
        loading,
        error,
        editingTodo,
        pendingCount,
        completedCount,
        loadTodos,
        addTodo,
        updateTodo,
        toggleTodo,
        deleteTodo,
        startEditing,
        cancelEditing,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
