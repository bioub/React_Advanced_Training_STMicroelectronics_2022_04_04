import React from 'react';

type Props = {
  name?: string;
}

function Hello({ name = 'someone' }: Props) {
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
