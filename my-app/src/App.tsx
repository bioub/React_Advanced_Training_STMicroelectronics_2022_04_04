import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Basics from './basics/Basics';
import ErrorBoundariesPage from './error-boundaries/ErrorBoundariesPage';
import HigherOrderComponents from './hocs/HigherOrderComponents';
import Hooks from './hooks/Hooks';
import RenderProps from './render-props/RenderProps';
import TodosClass from './optimize-classes/Todos';
import TodosFC from './optimize-hooks/Todos';

function App() {
  return (
    <div className="App">
      <nav className="menu">
        <Link to="/">Basics</Link>
        <Link to="/render-props">Render Props</Link>
        <Link to="/hocs">Higher Order Components</Link>
        <Link to="/hooks">Hooks</Link>
        <Link to="/error-boundaries">Error Boundaries</Link>
        <Link to="/optim-classes">Optim Classes</Link>
        <Link to="/optim-hooks">Optim Hooks</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Basics />} />
        <Route path="/render-props" element={<RenderProps />} />
        <Route path="/hocs" element={<HigherOrderComponents />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/error-boundaries" element={<ErrorBoundariesPage />} />
        <Route path="/optim-classes" element={<TodosClass />} />
        <Route path="/optim-hooks" element={<TodosFC />} />
      </Routes>
    </div>
  );
}

export default App;
