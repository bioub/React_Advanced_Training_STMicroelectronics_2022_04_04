import React, { Component } from 'react';
import Clock from './Clock';
import Counter from './Counter';
import Hello from './Hello';
import RegisterForm from './RegisterForm';
import Select from './Select';

class Basics extends Component {
  render() {
    const name = "Romain";
    return (
      <div className="Basics">
        {/* React.createElement(Hello, { name: 'Romain' }) */}
        {/* <Hello name="Romain" age={36} isTrainer={true} /> */}
        {/* <Hello name="Romain" age={36} isTrainer /> */}
        <Hello name={name} />
        <Select />
        <Clock />
        <Counter />
        <RegisterForm />
      </div>
    );
  }
}

export default Basics;
