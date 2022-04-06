const { memoize } = require('lodash');

// Memoization (optimization technique)

const initialTodos = (new Array(1_000_000)).fill({}).map((t, i) => ({
  id: i + 1,
  title: 'ABC',
  completed: Math.random() > 0.5
}));

function countUncompleted(todos) {
  return todos.filter((t) => !t.completed).length;
}

const countUncompletedMemo = memoize(countUncompleted);

console.time('countUncompletedMemo')
console.log(countUncompletedMemo(initialTodos));
console.timeEnd('countUncompletedMemo')

console.time('countUncompletedMemo')
console.log(countUncompletedMemo(initialTodos));
console.timeEnd('countUncompletedMemo')

// Array mutation
// initialTodos.push({id: 0, title: 'ABC', completed: false});

// Array immutability
const todos = [
  ...initialTodos,
  {id: 0, title: 'ABC', completed: false}
]

console.time('countUncompletedMemo')
console.log(countUncompletedMemo(todos));
console.timeEnd('countUncompletedMemo')

console.time('countUncompletedMemo')
console.log(countUncompletedMemo(todos));
console.timeEnd('countUncompletedMemo')
