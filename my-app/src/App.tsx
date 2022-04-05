import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Basics from './basics/Basics';
import HigherOrderComponents from './hocs/HigherOrderComponents';
import Hooks from './hooks/Hooks';
import RenderProps from './render-props/RenderProps';

function App() {
  return (
    <div className="App">
      <nav className="menu">
        <Link to="/">Basics</Link>
        <Link to="/render-props">Render Props</Link>
        <Link to="/hocs">Higher Order Components</Link>
        <Link to="/hooks">Hooks</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Basics />} />
        <Route path="/render-props" element={<RenderProps />} />
        <Route path="/hocs" element={<HigherOrderComponents />} />
        <Route path="/hooks" element={<Hooks />} />
      </Routes>
    </div>
  );
}

export default App;
