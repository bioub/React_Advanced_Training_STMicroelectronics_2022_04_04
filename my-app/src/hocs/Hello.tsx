import React from 'react';
import { colored } from './colored';
import { hideable } from './hideable';

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

export const HideableHello = hideable(Hello);
export const ColoredHello = colored(Hello);

export default Hello;
