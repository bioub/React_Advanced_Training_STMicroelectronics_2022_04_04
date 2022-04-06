import React from 'react';
import { Todo } from './Todo';

type Props = {
  todo: Todo;
};

function TodoItem({ todo }: Props) {
  console.log('TodoItem renders');
  return (
    <div className="TodoItem">
      <span>{todo.title}</span>
    </div>
  );
}

export default TodoItem;
