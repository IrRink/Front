import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './views/Main/main';
import Signin from './views/login/signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/detail" element={ <Signin /> } />
      </Routes>
    </Router>
  );
}

export default App;
