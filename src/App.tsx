import React from 'react';
import NotFoundPage from './pages/NotFoundPage';
import RegPage from './pages/RegPage';

import { Routes, Route, Link } from "react-router-dom";

import './assets/css/app.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RegPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
