import React, { ChangeEvent, Component } from 'react';
import Clock from './Clock';

class ClockWithControls extends Component {
  state = {
    format: 'HH:mm:ss',
    delay: 1000,
  }
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = (name === 'delay') ? +event.target.value : event.target.value;

    this.setState({
      [name]: value
    });
  }
  render() {
    const { format, delay } = this.state;
    return (
      <div className="ClockWithControls">
        <input name="format" value={format} onChange={this.handleChange} />
        <input name="delay" value={delay} onChange={this.handleChange} />
        <Clock format={format} delay={delay} />
      </div>
    );
  }
}

export default ClockWithControls;
