export const TodoItem = ({ todo, onToggle, onEdit, onDelete }) => {
  return (
    <article className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <button
        type="button"
        onClick={onToggle}
        className={`check-button ${todo.completed ? 'active' : ''}`}
        aria-label={todo.completed ? 'Marcar como pendente' : 'Marcar como concluída'}
      >
        {todo.completed ? '✓' : ''}
      </button>

      <div className="todo-content">
        <p className={`todo-text ${todo.completed ? 'completed-text' : ''}`}>
          {todo.title}
        </p>
      </div>

      <div className="todo-actions">
        <button type="button" onClick={onEdit} className="ghost-button">
          Editar
        </button>
        <button type="button" onClick={onDelete} className="danger-button">
          Excluir
        </button>
      </div>
    </article>
  );
};
