import React from 'react';
import useTodos from './hooks/useTodos';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import styles from './styles/App.module.css';

export default function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div className={styles.container}>
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}