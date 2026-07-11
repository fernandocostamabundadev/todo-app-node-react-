import {todoService} from '../services/todo.service.js';

export const getAllTodos = (req, res, next)=>{
  try{
    const todo = todoService.getAllTodos();
    res.json({
      status:'success',
      data: todo,
    });
  }catch(error){
    next(error);
  }
};
export const getTodoById = (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const todo = todoService.getTodoById(id);
    res.json({
      status: 'success',
      data: todo,
    });
  } catch (error) {
    next(error);
  }
};
export const createTodo= (req, res, next)=>{
  try {
    const { title, completed } = req.body;
    if (!title) {
      return res.status(400).json({
        status: 'error',
        message: 'Título é obrigatório',
      });
    }
    const newTodo = todoService.createTodo({ title, completed });
    res.status(201).json({
      status: 'success',
      data: newTodo,
    });
  } catch (error) {
    next(error);
  }
};
export const updateTodo= (req, res, next)=>{
  try {
    const id = parseInt(req.params.id);
    const { title, completed } = req.body;
    const updated = todoService.updateTodo(id, { title, completed });
    res.status(200).json({
      status: 'success',
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};
export const toggleTodo= (req, res, next)=>{
  try {
    const id = parseInt(req.params.id);
    const toggled = todoService.toggleTodo(id);
    res.status(200).json({
      status: 'success',
      data: toggled,
    });
  } catch (error) {
    next(error);
  }
};
export const deleteTodo= (req, res, next)=>{
  try {
    const id = parseInt(req.params.id);
    todoService.deleteTodo(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
