import styled from "styled-components";
import { useEffect } from "react";

const SigninfirstDiv = styled.div`
  width: calc(100% - 250px);
  height: 100vh;
  background-image: url("image1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 250px;
`;

const Filter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 2, 18, 0.568);
`;

function Signin() {
  useEffect(() => {
    const signupForm = document.getElementById('signupForm') as HTMLFormElement | null;

    if (!signupForm) return; // signupForm이 null이면 return으로 실행 중단

    const handleFormSubmit = (event: Event) => {
      event.preventDefault(); // 기본 제출 동작 방지

      const formData = new FormData(signupForm);
      const data = Object.fromEntries(formData.entries());

      // 서버에 데이터 전송
      fetch(signupForm.action, {
        method: signupForm.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            return response.text();
          }
          throw new Error('회원가입 실패');
        })
        .then((data) => {
          alert(data); // 서버로부터 받은 메시지 표시
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('회원가입 중 오류 발생');
        });
    };

    signupForm.addEventListener('submit', handleFormSubmit);

    // 컴포넌트가 언마운트되면 이벤트 리스너 제거
    return () => {
      signupForm.removeEventListener('submit', handleFormSubmit);
    };
  }, []);

  return (
    <SigninfirstDiv>
      <Filter>
        <div style={{ paddingTop: '10vh', margin: ' auto', backgroundColor: 'white', width: '1000px', height: '600px' }}>
          <h1>회원가입</h1>
          <form id="signupForm" method="POST" action="http://localhost:5500/process/adduser">
            <div>
              <label htmlFor="id">아이디:</label>
              <input id="id" name="id" required />
            </div>
            <div>
              <label htmlFor="name">이름:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="age">나이:</label>
              <input type="number" id="age" name="age" required />
            </div>
            <div>
              <label htmlFor="password">비밀번호:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">가입하기</button>
          </form>
          <a href="/createAccount">로그인</a>
        </div>
      </Filter>
    </SigninfirstDiv>
  );
}

export default Signin;
