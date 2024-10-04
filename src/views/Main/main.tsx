import Navber from "../../components/navbar";
import Loginnavbar from "../login/loginnavbar";
import Fistmainpage from "./firstpage";
import Second from "./second";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // react-router-dom 추가

function Main() {

if (localStorage.getItem('name')) {
  console.log('로그인 성공')
} else {
  alert('세션이 만료되었거나 로그인을 하지 않으셨습니다. 재 로그인 해주세요');
  window.location.href = '/signin'
}

  return (
    <>
      <div style={{ display: "flex" }} id="goRoot">
        <Loginnavbar />
        <Navber />
        <Fistmainpage />
      </div>
      <div></div>
      <div style={{ marginLeft: "250px", height: "60vh" }} id="section1">
        <Second />
      </div>
      <div style={{ marginLeft: "250px", height: "60vh" }} id="section1">
        <Second />
       
      </div>
      
    </>
  );
}

export default Main;
