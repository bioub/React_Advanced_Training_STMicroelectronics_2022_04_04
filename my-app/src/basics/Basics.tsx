import React, { Component } from 'react';
import Clock from './Clock';
import Counter from './Counter';
import Hello from './Hello';
import RegisterForm from './RegisterForm';
import Select from './Select';

type Props = {

}

type State = {
  name: string;
  count: number;
}

class Basics extends Component<Props, State> {
  state: State = {
    name: 'Samuel',
    count: 0,
  };
  handleSelected = (item: string) => {
    this.setState({
      name: item,
    });
  };
  handleIncrement = (step: number) => {
    const { count } = this.state;
    this.setState({
      count: count + step,
    });
  }
  render() {
    const { name, count } = this.state;
    return (
      <div className="Basics">
        {/* React.createElement(Hello, { name: 'Romain' }) */}
        {/* <Hello name="Romain" age={36} isTrainer={true} /> */}
        {/* <Hello name="Romain" age={36} isTrainer /> */}
        <Hello name={name} />
        <Select items={['Romain', 'Konstantin', 'Samuel']} selected={name} onSelected={this.handleSelected} />
        <Clock />
        <Counter count={count} onIncrement={this.handleIncrement} />
        <Counter count={count} onIncrement={this.handleIncrement} />
        <RegisterForm />
      </div>
    );
  }
}

export default Basics;
