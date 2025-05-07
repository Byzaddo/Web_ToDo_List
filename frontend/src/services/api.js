const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/todos';

export async function fetchTodos() {
  const res = await fetch(`${API_URL}/`);
  return res.json();
}

export async function createTodo(title) {
  const res = await fetch(`${API_URL}/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });
  return res.json();
}

export async function updateTodo(id, completed) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed })
  });
  return res.json();
}

export async function deleteTodoApi(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
}