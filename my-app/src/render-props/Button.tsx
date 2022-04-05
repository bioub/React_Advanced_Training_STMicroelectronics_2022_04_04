import React, { PropsWithChildren } from 'react';

type Props = {
  color: string
}

function Button({ color, children }: PropsWithChildren<Props>) {
  return (
    <div className="Button" style={{color}}>
      {children}
    </div>
  );
}

export default Button;
