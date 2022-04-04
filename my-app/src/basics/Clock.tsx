import React, { Component } from 'react';

type Props = {};

class Clock extends Component {
  state = {
    format: 'HH:mm:ss',
    now: new Date(),
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }
  render() {
    const { now } = this.state;
    return (
      <div className="Clock">
        Clock : {now.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;
