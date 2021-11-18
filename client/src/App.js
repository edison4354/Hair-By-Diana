import logo from './logo.svg';
import './App.css';
import Home from './views/home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Home />
      <Navbar />
    </Router>
  );
}

export default App;
