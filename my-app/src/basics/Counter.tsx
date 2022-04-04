import React, { Component, PointerEvent } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };
  handleClick = (event: PointerEvent<HTMLButtonElement>) => { // Counter.prototype.handleClick
    this.setState({ count: this.state.count + event.clientX });
  };
  render() {
    const { count } = this.state;

    return (
      <button className="Counter" onClick={this.handleClick}>
        {count}
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
