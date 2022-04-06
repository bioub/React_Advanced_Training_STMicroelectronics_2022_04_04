import React, { Component } from 'react';
import { format as formatDate } from 'date-fns'

type Props = {
  format?: string;
  delay?: number;
};

type State = {
  now: Date;
}

class Clock extends Component<Props, State> {
  state: State = {
    now: new Date(),
  };
  interval: any;
  componentDidMount() {
    console.log('componentDidMount');
    
    const { delay = 1000 } = this.props;
    this.interval = setInterval(() => {
      this.setState({
        now: new Date(),
      });
    }, delay);
  }
  componentDidUpdate(prevProps: Props) {
    const { delay = 1000 } = this.props;

    if (prevProps.delay === delay) {
      return;
    }
    
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.setState({
        now: new Date(),
      });
    }, delay);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  handleStop = () => {
    clearInterval(this.interval);
  };
  render() {
    const { format = 'HH:mm:ss' } = this.props;
    const { now } = this.state;
    return (
      <div className="Clock">
        Clock : {formatDate(now, format)}
        <button onClick={this.handleStop}>Stop</button>
      </div>
    );
  }
}

export default Clock;
