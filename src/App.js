import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

function App() {
  const handleSignUp = (username, password) => {
    // Perform signup logic here
    console.log("Sign up:", (username, password));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
        <Route path="/" element={<SignUp onSignUp={handleSignUp} />} />
      </Routes>
    </Router>
  );
}

export default App;
