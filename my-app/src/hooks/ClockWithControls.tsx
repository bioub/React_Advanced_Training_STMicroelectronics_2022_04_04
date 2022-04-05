import React, { useState } from 'react';
import Clock from './Clock';

function ClockWithControls() {
  const [format, setFormat] = useState('HH:mm:ss');
  const [delay, setDelay] = useState(1000);

  return (
    <div className="ClockWithControls">
      <input name="format" value={format} onChange={(e) => setFormat(e.target.value)} />
      <input name="delay" value={delay} onChange={(e) => setDelay(+e.target.value)} />
      <Clock format={format} delay={delay} />
    </div>
  );
}

export default ClockWithControls;
