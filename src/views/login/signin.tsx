import React from 'react';

function Signin() {
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

      if (response.ok) {
        // If login is successful, display the success message
        const result = await response.text();
        const resultDiv = document.getElementById('result');
        if (resultDiv) {
          resultDiv.innerHTML = result + `
            <button id="logoutButton">로그아웃</button>
          `;

          // Add click handler for the logout button
          const logoutButton = document.getElementById('logoutButton');
          if (logoutButton) {
            logoutButton.onclick = () => {
              window.location.href = 'logout.html'; // Redirect to logout page
            };
          }
        }
      } else {
        const result = await response.text(); // Get error message
        const resultDiv = document.getElementById('result');
        if (resultDiv) {
          resultDiv.innerHTML = result; // Display error message
        }
      }
    } catch (error) {
      console.error('로그인 요청 중 오류 발생:', error);
      const resultDiv = document.getElementById('result');
      if (resultDiv) {
        resultDiv.innerHTML = '<p>로그인 요청 중 오류 발생</p>'; // Display error message
      }
    }
  };

  return (
<div style={{ 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  height: '100vh', 
  backgroundColor: '#f0f2f5',
  width: 'calc(100% - 250px)',
  marginLeft: '250px'
}}>
  <div style={{ 
    padding: '20px 40px', 
    backgroundColor: '#ffffff', 
    width: '400px', 
    borderRadius: '8px', 
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
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
    <div id="result" style={{ 
      marginTop: '15px', 
      textAlign: 'center', 
      color: '#d9534f' 
    }}></div>
    <button id="signupButton" onClick={() => window.location.href = 'signup.html'} style={{ 
      width: '100%', 
      padding: '12px', 
      marginTop: '20px', 
      backgroundColor: '#2196F3', 
      color: 'white', 
      border: 'none', 
      borderRadius: '4px', 
      fontSize: '16px', 
      cursor: 'pointer' 
    }}>회원가입</button>
  </div>
</div>

  );
}

export default Signin;