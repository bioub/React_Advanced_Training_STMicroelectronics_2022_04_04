import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodosList from './TodosList';

const initialTodos = [
  {
    id: 1,
    title: 'ABC',
    completed: false,
  },
  {
    id: 2,
    title: 'DEF',
    completed: true,
  },
];

function Todos() {
  console.log('Todos renders');

  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState('');

  const handleAdd = () => {
    setTodos([
      {
        id: Math.random(),
        title: newTodo,
        completed: false,
      },
      ...todos,
    ]);
  };

  return (
    <div className="Todos">
      <TodoForm newTodo={newTodo} onNewTodoChange={setNewTodo} onAdd={handleAdd} />
      <TodosList todos={todos} />
    </div>
  );
}

export default Todos;
