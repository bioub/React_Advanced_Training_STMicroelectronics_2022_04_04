import React, { Component } from 'react';
import { Todo } from './Todo';
import TodoItem from './TodoItem';

type Props = {
  todos: Todo[];
};

class TodosList extends Component<Props> {
  render() {
    const { todos } = this.props;
    return (
      <div className="TodosList">
        {todos.map((t) => (
          <TodoItem key={t.id} todo={t} />
        ))}
      </div>
    );
  }
}

export default TodosList;
