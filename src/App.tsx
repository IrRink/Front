import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./views/Main/main";
import Signin from "./views/login/signin";
import Navber from "./components/navbar";

function App() {
  return (
    <Router>
      <Navber />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
