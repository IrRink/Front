import React from 'react';

function CreateAccount() {
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
    <div>
      <form id="loginForm" onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="아이디" required />
        <input type="password" name="password" placeholder="비밀번호" required />
        <button type="submit">로그인</button>
      </form>

      <div id="result"></div>
      <button id="signupButton" onClick={() => window.location.href = 'signup.html'}>
        회원가입
      </button>
    </div>
  );
}

export default CreateAccount;
