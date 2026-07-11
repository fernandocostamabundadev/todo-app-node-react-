import { useTodos } from '../hooks/useTodos.js';
import { TodoForm } from '../components/todos/TodoForm.jsx';
import { TodoList } from '../components/todos/TodoList.jsx';
import { TodoStats } from '../components/todos/TodoStats.jsx';
import { Loader } from '../components/common/Loader.jsx';

export const Dashboard = () => {
  const {
    todos,
    loading,
    error,
    pendingCount,
    completedCount,
    addTodo,
    toggleTodo,
    deleteTodo,
  } = useTodos();

  if (loading) {
    return <Loader message="Carregando tarefas..." />;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-dark mb-2">Minhas Tarefas</h1>
      <p className="text-gray-600 mb-6">Gerencie suas tarefas do dia a dia</p>

      <TodoStats
        total={todos.length}
        pending={pendingCount}
        completed={completedCount}
      />

      <TodoForm onAdd={addTodo} isLoading={loading} />

      {error && (
        <div className="bg-error/10 text-error p-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
};
