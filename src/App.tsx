import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./views/Main/main";
import Signin from "./views/login/signin";
import Navber from "./components/navbar";
import CreateAccount from "./views/login/createAccount";
import Fourgongfour from "./views/404";
import Adminsign from "./views/login/admin/adminsign";

function App() {
  return (
    <Router>
      <Navber />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<Fourgongfour />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path='adminsign' element={<Adminsign />}/>
      </Routes>
    </Router>
  );
}

export default App;
