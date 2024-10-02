import styled, { createGlobalStyle } from 'styled-components'; // createGlobalStyle 추가
import React from 'react';

const NavberMainDiv = styled.div`  
  width : 250px;
  height: 100vh;
  position : fixed;
  top :0; 
  left : 0;
  z-index : 99;
  background-color : white;
  box-shadow : 0px 10px 5px 5px #5c5c5c6e;
`;


function Navber() {
  return (
    <NavberMainDiv>
        <img src="https://tistory1.daumcdn.net/tistory/4939852/skin/images/istock.webp" alt="" style={{width : '100%', height : '95px', objectFit: 'cover'}}/>
        <img src="irlinklogo.png" alt=""  style={{width : '100px', height : '100px', position : 'absolute', left : '50%', top: '50px', transform : 'translate(-50%, 0%)', borderRadius : '25px'}}/>
    </NavberMainDiv>
  );
}

export default Navber;
