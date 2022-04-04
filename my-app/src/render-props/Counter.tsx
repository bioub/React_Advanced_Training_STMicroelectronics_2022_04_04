import React, { Component, PointerEvent } from 'react';

type Props = {
  count: number;
  onIncrement(step: number): void;
  renderCount(count: number): JSX.Element;
};

// class Counter extends Component<Props> {
//   handleClick = (event: PointerEvent<HTMLButtonElement>) => { // Counter.prototype.handleClick
//     const { onIncrement } = this.props;
//     onIncrement(event.clientX);
//   };
//   render() {
//     const { count } = this.props;

//     return (
//       <button className="Counter" onClick={this.handleClick}>
//         {count}
//       </button>
//     );
//   }
// }

function Counter({ count, onIncrement, renderCount }: Props) {
  const handleClick = (event: PointerEvent<HTMLButtonElement>) => {
    onIncrement(event.clientX);
  };
  return (
    <button className="Counter" onClick={handleClick}>
      {renderCount(count)}
    </button>
  );
}

// buttonEl.addEventListener('click', () => {
//   this.setState({ count: this.state.count + 1 });
// }, { capture: true });

// buttonEl.onclick = () => {
//   this.setState({ count: this.state.count + 1 });
// };

export default Counter;
