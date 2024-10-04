import React, { useState } from 'react';
import styled from "styled-components";


const Filter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 2, 18, 0.568);
`;

const Signin: React.FC = () => {
  const [resultMessage, setResultMessage] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.currentTarget);
    const data = new URLSearchParams();

    // Convert FormData to URLSearchParams
    formData.forEach((value, key) => {
      data.append(key, value as string);
    });

    try {
      const response = await fetch('http://localhost:5500/process/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString(),
      });

      const result = await response.text(); // Get the response text
      
      if (response.ok) {
        localStorage.setItem('name', result);
        console.log('ok')
        window.location.href = '/'
        // Add click handler for the logout button
        setTimeout(() => {
          const logoutButton = document.getElementById('logoutButton');
          if (logoutButton) {
            logoutButton.onclick = () => {
              window.location.href = 'logout.html'; // Redirect to logout page
            };
          }
        }, 0);
      } else {
        // If login fails, display the error message
        setResultMessage(result);
      }
    } catch (error) {
      console.error('로그인 요청 중 오류 발생:', error);
      setResultMessage('로그인 요청 중 오류 발생'); // Display error message
    }
  };

  return (
    <div style={{ 
      width: 'calc(100% - 250px)',
      backgroundImage: 'url("image1.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#f0f2f5',
      marginLeft: '250px'
    }}>
      <Filter>
      <div style={{ 
        padding: '20px 40px', 
        backgroundColor: '#ffffff', 
        width: '400px', 
        borderRadius: '8px', 
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        margin : '27vh auto'

      }}>
        <h1 style={{ 
          textAlign: 'center', 
          color: '#333', 
          marginBottom: '20px'
        }}>로그인</h1>
        <form id="loginForm" onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '15px' }}>
            <input type="text" name="id" placeholder="아이디" required style={{ 
              width: '100%', 
              padding: '10px', 
              borderRadius: '4px', 
              border: '1px solid #ddd', 
              fontSize: '14px' 
            }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input type="password" name="password" placeholder="비밀번호" required style={{ 
              width: '100%', 
              padding: '10px', 
              borderRadius: '4px', 
              border: '1px solid #ddd', 
              fontSize: '14px' 
            }} />
          </div>
          <button type="submit" style={{ 
            width: '100%', 
            padding: '12px', 
            backgroundColor: '#4CAF50', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            fontSize: '16px', 
            cursor: 'pointer' 
          }}>로그인</button>
        </form>
        {resultMessage && <div id="result" style={{ 
          marginTop: '15px', 
          textAlign: 'center', 
          color: '#d9534f',
          display : 'none'
        }}>{resultMessage}</div>}
        <button id="signupButton" onClick={() => window.location.href = '/createAccount'} style={{ 
          width: '100%', 
          padding: '12px', 
          marginTop: '20px', 
          backgroundColor: 'white', 
          color: 'gray', 
          border: 'none', 
          borderRadius: '4px', 
          fontSize: '16px', 
          cursor: 'pointer' 
        }}>회원이 아니신가요? 회원가입하러 가기</button>
        <button style={{ 
          width: '100%', 
          padding: '12px', 
          marginTop: '0px', 
          backgroundColor: 'white', 
          color: 'gray', 
          border: 'none', 
          borderRadius: '4px', 
          fontSize: '16px', 
          cursor: 'pointer' 
        }} onClick={() => window.location.href = '/adminsign'}>관리자 로그인하기</button>
      </div>
      </Filter>
    </div>
  );
};

export default Signin;
