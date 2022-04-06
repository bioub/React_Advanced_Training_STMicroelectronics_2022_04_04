import React, { useCallback, useMemo, useRef, useState } from 'react';
import Select from './Select';
import { Todo } from './Todo';
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

const items = ['Romain', 'Konstantin', 'Samuel'];

function countUncompleted(todos: Todo[]) {
  console.log('countUncompleted called')
  return todos.filter((t) => !t.completed).length;
}  

function Todos() {
  console.log('Todos renders');

  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState('');
  const [name, setName] = useState('Romain');

  const itemsRef = useRef(['Romain', 'Konstantin', 'Samuel']);

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

  const itemsMemo = useMemo(() => ['Romain', 'Konstantin', 'Samuel'], []);
  // const handleSelected = useMemo(() => (v: string) => setName(v), []);
  const handleSelected = useCallback((v: string) => setName(v), []);


  const countUncompletedTodos = useMemo(() => countUncompleted(todos), [todos]);
  
  return (
    <div className="Todos">
      <TodoForm newTodo={newTodo} onNewTodoChange={setNewTodo} onAdd={handleAdd} />
      <TodosList todos={todos} />

      <Select items={items} selected={name} onSelected={setName} />
      <Select items={itemsRef.current} selected={name} onSelected={setName} />
      <Select items={itemsMemo} selected={name} onSelected={handleSelected} />
      
      <p>Uncompleted todos : {countUncompletedTodos}</p>
    </div>
  );
}

export default Todos;
