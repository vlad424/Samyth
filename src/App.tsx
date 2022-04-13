import React from 'react';
import NotFoundPage from './pages/NotFoundPage';
import RegPage from './pages/RegPage';

import { Routes, Route, Link } from "react-router-dom";

import './assets/css/app.css'
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RegPage/>}/>
        <Route path="feed" element={<MainPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
