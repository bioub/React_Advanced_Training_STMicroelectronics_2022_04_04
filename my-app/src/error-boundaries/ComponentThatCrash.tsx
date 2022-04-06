import React from 'react';

function ComponentThatCrash() {

  throw new Error('Error from ComponentThatCrash');

  return (
    <div className="ComponentThatCrash">
      ComponentThatCrash Component
    </div>
  );
}

export default ComponentThatCrash;
