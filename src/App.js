import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Profile />
    </div>
  );
}

export default App;
