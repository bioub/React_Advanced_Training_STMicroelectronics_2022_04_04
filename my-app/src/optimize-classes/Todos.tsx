import React, { Component } from 'react';
import Select from './Select';
import { Todo } from './Todo';
import TodoForm from './TodoForm';
import TodosList from './TodosList';

// const initialTodos = [
//   {
//     id: 1,
//     title: 'ABC',
//     completed: false,
//   },
//   {
//     id: 2,
//     title: 'DEF',
//     completed: true,
//   }
// ]

const initialTodos = (new Array(1000)).fill({}).map((t, i) => ({
  id: i + 1,
  title: 'ABC',
  completed: Math.random() > 0.5
}));

type State = {
  todos: Todo[];
  newTodo: string;
  name: string;
};

class Todos extends Component {
  state: State = {
    todos: initialTodos,
    newTodo: '',
    name: 'Romain',
  };
  items = ['Romain', 'Konstantin', 'Samuel']
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
          id: Math.random(),
          title: newTodo,
          completed: false,
        },
        ...todos,
      ],
    });
  };
  handleDelete = (todo: Todo) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((t) => t.id !== todo.id),
    });
  }
  handleSelected = (item: string) => {
    this.setState({
      name: item,
    });
  };
  render() {
    console.log('Todos renders');
    const { newTodo, todos, name } = this.state;
    const { setNewTodo, handleAdd } = this;
    
    return (
      <div className="Todos">
        <TodoForm newTodo={newTodo} onNewTodoChange={setNewTodo} onAdd={handleAdd} />
        <TodosList todos={todos} onDelete={this.handleDelete} />

        <Select items={this.items} selected={name} onSelected={this.handleSelected} />
      </div>
    );
  }
}

export default Todos;
