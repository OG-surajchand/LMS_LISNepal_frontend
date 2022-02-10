import React from 'react';
import './Style/Login.css';
import Login from './Components/Login.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Register from './Components/Register';

function App() {
  return(
    <Router>
       <Routes>
        <Route exact path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
       </Routes>
    </Router>
  );
}

export default App;
