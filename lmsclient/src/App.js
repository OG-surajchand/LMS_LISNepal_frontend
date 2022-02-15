import React from 'react';
import Login from './Components/Login.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './Components/Register';
import Profile from './Pages/Profile';

function App() {
  return(
    <Router>
       <Routes>
        <Route exact path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
       </Routes>
    </Router>
  );
}

export default App;
