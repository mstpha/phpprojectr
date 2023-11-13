import './App.css';
import React from "react";
import Register from './Register';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Login from './Login.js';
import Main from './Mainpage/Main.js';

function App() {
  return (
    <Router>
     <Routes>
      <Route path={"/"} element={<Login/>}/>
      <Route path={"/Register"} element={<Register/>}/>
      <Route path={"/Main"} element={<Main/>}/>
     </Routes>
    </Router>
  );
}

export default App;
