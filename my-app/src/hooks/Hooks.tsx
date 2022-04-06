import React, { useState } from 'react';
import Select from './Select';
import Counter from './Counter';
import Hello from './Hello';
import RegisterForm from './RegisterForm';
import ClockWithControls from './ClockWithControls';
import { useLocation } from 'react-router-dom';

// in a class component the state was an object
// {
//   name: 'Romain',
//   count: 0,
// }

// in a function component using useState the state is an array
// [
//   'Romain', // first call of useState
//   0,        // second call of useState
// ]

// const tmp1 = useState('Romain');
// const name = tmp1[0];
// const tmp2 = useState(0);
// const count = tmp2[0];
// const setCount = tmp2[1];

// const [name] = useState('Romain');
// const [count, setCount] = useState(0);

function Hooks() {
  const [name, setName] = useState('Romain');
  const [count, setCount] = useState(0);
  const [items] = useState<string[]>([]);

  const location = useLocation();

  console.log(location);
  

  return (
    <div className="Hooks">
      <Hello name={name} />
      <Counter count={0} onIncrement={() => setCount(count + 1)} />
      <Select items={['Romain', 'Konstantin', 'Samuel']} selected={name} onSelected={setName} />
      <RegisterForm />
      <ClockWithControls />
      <ClockWithControls />
    </div>
  );
}

export default Hooks;
