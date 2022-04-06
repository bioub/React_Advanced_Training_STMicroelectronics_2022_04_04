import React, { Component } from 'react';
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
  }
]

type State = {
  todos: Todo[];
  newTodo: string;
};

class Todos extends Component {
  state: State = {
    todos: initialTodos,
    newTodo: '',
  };
  setNewTodo = (newTodo: string) => {
    this.setState({
      newTodo,
    });
  };
  handleAdd = () => {
    const { newTodo, todos } = this.state;
    this.setState({
      todos: [
        {
          id: (todos.at(-1)?.id ?? 0) + 1, // last id + 1
          title: newTodo,
          completed: false,
        },
        ...todos,
      ],
    });
  };
  render() {
    console.log('Todos renders');
    const { newTodo, todos } = this.state;
    const { setNewTodo, handleAdd } = this;
    return (
      <div className="Todos">
        <TodoForm newTodo={newTodo} onNewTodoChange={setNewTodo} onAdd={handleAdd} />
        <TodosList todos={todos}  />
      </div>
    );
  }
}

export default Todos;
