import React, { PureComponent } from 'react';
import { Todo } from './Todo';
import TodoItem from './TodoItem';

type Props = {
  todos: Todo[];
  onDelete(todo: Todo): void;
};

class TodosList extends PureComponent<Props> {
  // shouldComponentUpdate(nextProps: Props, nextState: State) {
  //   return this.props.todos !== nextProps.todos;
  // }
  render() {
    console.log('TodosList renders');
    const { todos, onDelete } = this.props;
    return (
      <div className="TodosList">
        {todos.map((t) => (
          <TodoItem key={t.id} todo={t} onDelete={onDelete} />
        ))}
      </div>
    );
  }
}

export default TodosList;
