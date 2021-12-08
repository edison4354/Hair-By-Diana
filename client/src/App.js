import React from 'react';
import './App.css';
import Home from './views/home';
import Navbar from './components/Navbar';
import Booking from './views/booking';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/book" exact element={<Booking />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
