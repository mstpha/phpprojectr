import React, { useState, useEffect } from "react";
import axios from 'axios';

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import './App.css';

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const [users, setUsers] = useState([]);

  const checkInfo = () => {
    axios.post("http://localhost:3001/chkdata", {
      name: name,
      pass: pass,
    }).then((res) => {
      const exist = res.data;
      axios.get("http://localhost:3001/login").then((response) => {
        setUsers(response.data);

        if (exist) {
          navigate("/Main", { state: { name } });
        } else {
          if (name.length === 0) {
            setErr("");
          } else {
            setErr(name + " does not exist, you can try registering an account instead.");
          }
        }
      }
      )
    }
    )
  }

  return (
    <div className="grid-container">
      <motion.div
        initial={{ x: "-100%", scale: 0.1, opacity: 0.1, blur: 5 }}
        animate={{ x: 0, scale: 1, opacity: 1, blur: 0 }}
        transition={{ duration: 5 }}
        className="login-container">
        <div className='logbox'>
          <span className="log">Login:</span>
          <form className="login-form">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => { setName(event.target.value) }}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={pass}
              onChange={(event) => { setPass(event.target.value) }}
            />
            <div className="continue" onClick={() => navigate("/main")}>Continue</div>
          </form>
          <p className="register-link">
            Don't have an account? <a onClick={() => { navigate('/Register') }}>Click here to register.</a>
          </p>
          {err && <div className="error-box">{err}</div>}
        </div></motion.div></div>
  );
}

export default Login;
