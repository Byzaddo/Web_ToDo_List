import React, { useState } from 'react';

export default function TodoForm({ addTodo }) {
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo(title.trim());
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="New task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}