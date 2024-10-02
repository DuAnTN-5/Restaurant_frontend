// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



import App from './App.jsx'
import './index.css'
import HomePage from './pages/HomePage.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Home from './pages/Home.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
  </Router>

  // </StrictMode>,
)
