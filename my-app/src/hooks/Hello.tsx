import React from 'react';

type Props = {
  name?: string;
  age?: number;
  isTrainer?: boolean;
}

function Hello({ name = '', age = 0, isTrainer = false }: Props) {
  // HTMLDivElement -> MDN
  // const divEl = document.createElement('div');
  // divEl.className = 'Hello';

  return (
    // React.createElement('div', {className: 'Hello'}, 'Hello ', React.createElement..);
    <div className="Hello">
      Hello {name}
    </div>
  );
}

export default Hello;
