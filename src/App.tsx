import React from 'react';
import NotFoundPage from './pages/NotFoundPage';
import RegPage from './pages/RegPage';
import MainPage from './pages/MainPage';
import ChatsPage from './pages/ChatsPage';
import GroopsPage from './pages/GroopsPage';
import MusicPage from './pages/MusicPage';
import FeedPage from './pages/FeedPage';
import ProfilePage from './pages/ProfilePage';

import { Routes, Route, Link } from "react-router-dom";

import './assets/css/app.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RegPage/>}/>
        <Route path="feed" element={<MainPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
        <Route path="/messages" element={<ChatsPage/>}/>
        <Route path="/groops" element={<GroopsPage/>}/>
        <Route path="/music" element={<MusicPage/>}/>
        <Route path="/feed" element={<FeedPage/>}/>
        <Route path="/id/1" element={<ProfilePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
