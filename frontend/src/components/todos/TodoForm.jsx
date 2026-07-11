import { useState } from 'react';
import { Button } from '../common/Button.jsx';
import { Input } from '../common/Input.jsx';

export const TodoForm = ({ onAdd, isLoading }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) {
      setError('Digite uma tarefa');
      return;
    }
    setError('');
    onAdd({ title: trimmed });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-4">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Digite uma tarefa..."
        error={error}
        disabled={isLoading}
        className="flex-1"
      />
      <Button type="submit" isLoading={isLoading} size="md">
        Adicionar
      </Button>
    </form>
  );
};
