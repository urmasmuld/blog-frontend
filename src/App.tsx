import * as React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Index from './views';
import Header from './components/header/Header';

import ProfileView from './views/users/profileView';
import PostsView from './views/posts/postsView';


function App() {
  return (
    <div className="App">    
      <header className="App-header">
        <Header />
        <Routes>
          <Route path="/" element={Index()}/>
          <Route path="/users" element={ProfileView()}/>
          <Route path="/posts" element={PostsView()}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;