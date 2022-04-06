import { Todo } from './Todo';
import TodoItem from './TodoItem';

type Props = {
  todos: Todo[];
};

function TodosList({ todos }: Props) {
  return (
    <div className="TodosList">
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} />
      ))}
    </div>
  );
}

export default TodosList;
