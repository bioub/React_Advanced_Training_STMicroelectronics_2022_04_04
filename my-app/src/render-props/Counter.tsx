import React, { Component, PointerEvent } from 'react';

type Props = {
  renderCount(count: number): JSX.Element;
};

type State = {
  count: number;
}

class Counter extends Component<Props, State> {
  state: State = {
    count: 0,
  };
  handleClick = (event: PointerEvent<HTMLButtonElement>) => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  };
  render() {
    const { count } = this.state;
    const { renderCount } = this.props;
    return (
      <button className="Counter" onClick={this.handleClick}>
        {renderCount(count)}
      </button>
    );
  }
}

// buttonEl.addEventListener('click', () => {
//   this.setState({ count: this.state.count + 1 });
// }, { capture: true });

// buttonEl.onclick = () => {
//   this.setState({ count: this.state.count + 1 });
// };

export default Counter;
