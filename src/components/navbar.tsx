import styled, { createGlobalStyle } from 'styled-components'; // createGlobalStyle 추가
import React from 'react';

const NavberMainDiv = styled.div`
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: white;
  box-shadow: 0px 10px 5px 5px #5c5c5c6e;
`;

const Profilimg = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50px;
  transform: translate(-50%, 0%);
  border-radius: 25px;
`;

const name = '김민서';
function Navber() {
  return (
    <NavberMainDiv>
      <img
        src="https://tistory1.daumcdn.net/tistory/4939852/skin/images/istock.webp"
        alt=""
        style={{ width: '100%', height: '95px', objectFit: 'cover' }}
      />
      <Profilimg src="irlinklogo.png" alt="" />
      <div style={{ height: '60px' }}></div>
      <p style={{ textAlign: 'center', marginTop: '10px' }}>{name}</p>
      <div>
        <ul
          style={{
            textAlign: 'center',
            width: '70%',
            margin: '0 auto',
            listStyleType: 'none',
            borderRadius: '100px',
            padding: '10px',
            boxShadow: '0px 0px 6px 4px #a5a5a56c',
            marginTop: '40px',
          }}
        >
          <li>
            <a href="/">🏡 home</a>
          </li>
          <li>
            <a href="/signin">🏡 Sign in</a>
          </li>
          <li>
            <a href="#">🏡 Create</a>
          </li>
        </ul>
      </div>

      <div
        style={{ borderBottom: '1px solid #d8d8d8', marginTop: '30px' }}
      ></div>
      <ul>
        <li>
          <a href="#section1">section 1</a>
        </li>
      </ul>
    </NavberMainDiv>
  );
}

export default Navber;
