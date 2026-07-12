import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";

const apiUrl = "http://localhost:3001/api/todo";

const emptyForm = {
  task: "",
};

function App() {
  const [todos, setTodos] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setTodos(data);
    } catch (err) {
      setError("Não foi possível carregar as tarefas.");
    } finally {
      setLoading(false);
    }
  };

  const saveTodo = async (todo) => {
    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `${apiUrl}/${editingId}` : apiUrl;
    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });

    if (!response.ok) {
      throw new Error("Falha ao salvar tarefa.");
    }

    return response.json();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const task = form.task.trim();
    if (!task) {
      setError("Digite uma tarefa para continuar.");
      return;
    }

    try {
      const result = await saveTodo({
        title: task,
        description: "",
      });

      if (editingId) {
        setTodos((prev) =>
          prev.map((item) => (item.id === result.id ? result : item)),
        );
      } else {
        setTodos((prev) => [...prev, result]);
      }

      setForm(emptyForm);
      setEditingId(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const editTodo = (todo) => {
    setForm({ task: todo.title });
    setEditingId(todo.id);
    setError("");
  };

  const cancelEdit = () => {
    setForm(emptyForm);
    setEditingId(null);
    setError("");
  };

  const removeTodo = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
      if (!response.ok) {
        throw new Error("Falha ao excluir tarefa.");
      }
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleTodo = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/${id}/toggle`, {
        method: "PATCH",
      });
      if (!response.ok) {
        throw new Error("Falha ao atualizar status.");
      }
      const updated = await response.json();
      setTodos((prev) =>
        prev.map((todo) => (todo.id === updated.id ? updated : todo)),
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const pendingCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="app-shell">
      <div className="app-card">
        <header className="page-header">
          <div>
            <h1>Minhas tarefas</h1>
            <p className="eyebrow">Lista simples</p>
          </div>
          <span className="pill">{pendingCount} pendentes</span>
        </header>

        <form onSubmit={handleSubmit} className="task-form">
          <input
            value={form.task}
            onChange={(event) => setForm({ task: event.target.value })}
            placeholder={
              editingId ? "Editar tarefa..." : "Digite uma tarefa..."
            }
          />
          <button className="primary-button" type="submit">
            {editingId ? "Salvar" : "Adicionar"}
          </button>
        </form>

        {editingId && (
          <button type="button" onClick={cancelEdit} className="secondary-link">
            Cancelar edição
          </button>
        )}

        {error && <p className="error-message">{error}</p>}

        <section className="task-list">
          {loading ? (
            <div className="empty-state">Carregando...</div>
          ) : todos.length === 0 ? (
            <div className="empty-state">Nenhuma tarefa foi criada</div>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onEdit={() => editTodo(todo)}
                onDelete={() => removeTodo(todo.id)}
                onToggle={() => toggleTodo(todo.id)}
              />
            ))
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
