import React from 'react';

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id, !todo.completed)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
    </li>
  );
}