import { useState } from 'react'
import './index.css'
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './Navbar/Navbar';
import Footer from './pages/Footer';
function App() {
 

  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>

      
    </>
  )
}

export default App
