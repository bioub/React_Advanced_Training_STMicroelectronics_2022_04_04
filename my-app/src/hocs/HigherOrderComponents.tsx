import React, { Component } from 'react';
import Clock, { HideableClock } from './Clock';
import { HideableHello } from './Hello';

class HigherOrderComponents extends Component {
  render() {
    return (
      <div className="HigherOrderComponents">
        <HideableClock defaultShow={false} />
        <HideableHello defaultShow={false} name="Romain" />
      </div>
    );
  }
}

export default HigherOrderComponents;
