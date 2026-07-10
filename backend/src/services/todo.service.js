let todos =[
  {id:1, title:'estudar html5', completed:true},
  {id:2, title:'estudar css3', completed:false},
  {id:3, title:'estudar react.js', completed:true},
  {id:4, title:'estudar node.js', completed:false}
]

let nextId = 5;

export const todoService={
  //listar todos
  getAllTodos:()=>{
    return todos;
  },
  //Criar tarefa
  createTodo:(data)=>{
    const newTodo ={
    id: nextId++,
    title: data.title,
    completed: data.completed || false
    };
    todos.push(newTodo);
    return newTodo;
  },
  //atualizar tarefa
  updateTodo: (id, data) =>{
    const todo = todos.find((item) => item.id === id);
  if (!todo) {
    const error = new Error('Tarefa não encontrada');
    error.status = 404;
    throw error;
  }
  if (data.title !== undefined) todo.title = data.title.trim();
  if (data.completed !== undefined) todo.completed = data.completed;
  return todo;
  },
  //alterar status da tarefa
  toggleTodo: (id) => {
    const todo = todos.find((item) => item.id === id);
  if (!todo) {
    const error = new Error('Tarefa não encontrada');
    error.status = 404;
    throw error;
  }
  todo.completed = !todo.completed;
  return todo;
  },
  //eliminar tarefa
  deleteTodo: (id) =>{
  const index = todos.findIndex((item) => item.id === id);
  if (index === -1) {
    const error = new Error('Tarefa não encontrada');
    error.status = 404;
    throw error;
  }
  todos.splice(index, 1);
  return true;
  },
}
