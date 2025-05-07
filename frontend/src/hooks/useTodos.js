import { useState, useEffect } from 'react';
import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodoApi
} from '../services/api';

export default function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos().then(setTodos);
  }, []);

  const addTodo = async title => {
    const newTodo = await createTodo(title);
    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleTodo = async (id, completed) => {
    const updated = await updateTodo(id, completed);
    setTodos(prev => prev.map(t => (t.id === id ? updated : t)));
  };

  const deleteTodo = async id => {
    await deleteTodoApi(id);
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  return { todos, addTodo, toggleTodo, deleteTodo };
}