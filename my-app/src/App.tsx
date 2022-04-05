import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Basics from './basics/Basics';
import RenderProps from './render-props/RenderProps';

function App() {
  return (
    <div className="App">
      <nav className="menu">
        <Link to="/">Basics</Link>
        <Link to="/render-props">Render Props</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Basics />} />
        <Route path="/render-props" element={<RenderProps />} />
      </Routes>
    </div>
  );
}

export default App;
