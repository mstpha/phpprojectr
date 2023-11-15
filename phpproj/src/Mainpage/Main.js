import React, { useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import "./Main.css";
import { motion, useInView } from "framer-motion";
import Img from "./../bg.jpg";
function App() {
  const ref = useRef(null)
  const isInview = useInView(ref, { once: true })
  return (
    <div className="main">
      <div className="mainsec" >


        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          initial="hidden"
          animate="animation"
          transition={{ duration: 1 }}
          className="profilesec"
        >
          <motion.img
            src={Img}
            className="profimg"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          />{" "}
          <div className="id">
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              name
            </motion.span>
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 3 }}
            >
              last name
            </motion.span>
          </div>
        </motion.div>
        <motion.div className="post">
          <img src={Img}
            className="profimg1"
          /> <div style={{ marginTop: "2vh" }}>name ben name</div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
