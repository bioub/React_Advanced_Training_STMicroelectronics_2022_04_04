import React, { Component } from 'react';
import Button from './Button';
import Counter from './Counter';

type Props = {

}

type State = {
  name: string;
  count: number;
}

class RenderProps extends Component {
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
    const { count } = this.state;

    return (
      <div className="RenderProps">
        {/* <Button element={<b>Value</b>} /> */}
        <Button>
          <b>Value</b>
        </Button>

        <Counter count={count} onIncrement={this.handleIncrement} renderCount={(c) => <b>{c}</b>} />
      </div>
    );
  }
}

export default RenderProps;
