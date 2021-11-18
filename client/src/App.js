import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './views/home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Home />
      <Navbar />
    </Router>
  );
}

export default App;
