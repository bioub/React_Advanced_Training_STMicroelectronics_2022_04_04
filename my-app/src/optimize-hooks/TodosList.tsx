import { memo } from 'react';
import { Todo } from './Todo';
import TodoItem from './TodoItem';

type Props = {
  todos: Todo[];
};

function TodosList({ todos }: Props) {
  console.log('TodosList renders');
  return (
    <div className="TodosList">
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} />
      ))}
    </div>
  );
}

export default memo(TodosList);
