import React, { Component } from 'react';
import Clock, {  ColoredClock, HideableClock } from './Clock';
import { ColoredHello, HideableHello } from './Hello';

class HigherOrderComponents extends Component {
  render() {
    return (
      <div className="HigherOrderComponents">
        <HideableClock defaultShow={false} />
        <HideableHello defaultShow={false} name="Romain" />
        <ColoredClock color="blue" />
        <ColoredClock color="red" />
        <ColoredHello color="blue" name="Romain" />
      </div>
    );
  }
}

export default HigherOrderComponents;
