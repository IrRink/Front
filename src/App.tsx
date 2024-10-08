import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./views/Main/main";
import Signin from "./views/login/signin";
import Navber from "./components/navbar";
import CreateAccount from "./views/login/createAccount";
import NotFound from "./views/NotFound";
import Adminsign from "./views/login/admin/adminsign";
import Admincreate from "./views/login/admin/adminsignup";

function App() {
  return (
    <Router>
      <Navber />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/signin" element={<Adminsign />} />
        <Route path="/createAccount" element={<Admincreate />} />
      </Routes>
    </Router>
  );
}

export default App;
