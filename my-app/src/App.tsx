import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Basics from './basics/Basics';
import RenderProps from './render-props/RenderProps';

function App() {
  return (
    <div className="App">
      <nav className="menu">
        <a href="/">Basics</a>
        <a href="/render-props">Render Props</a>
      </nav>
      <Routes>
        <Route path="/" element={<Basics />} />
        <Route path="/render-props" element={<RenderProps />} />
      </Routes>
    </div>
  );
}

export default App;
