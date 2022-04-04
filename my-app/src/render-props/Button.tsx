import React from 'react';

type Props = {
  children: JSX.Element,
}

function Button({ children }: Props) {
  return (
    <div className="Button">
      {children}
    </div>
  );
}

export default Button;
