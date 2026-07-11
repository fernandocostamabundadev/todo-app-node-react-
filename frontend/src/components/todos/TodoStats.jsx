export const TodoStats = ({ total, pending, completed }) => {
  return (
    <div className="flex gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
      <span className="text-sm">
        Total: <strong>{total}</strong>
      </span>
      <span className="text-sm text-yellow-600">
        Pendentes: <strong>{pending}</strong>
      </span>
      <span className="text-sm text-green-600">
        Concluídas: <strong>{completed}</strong>
      </span>
    </div>
  );
};
