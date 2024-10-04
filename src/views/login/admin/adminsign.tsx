

function Adminsign() {

  return (
        <>
            <h1>관리자 로그인</h1>
            <form id="loginForm">
                <input type="text" name="id" placeholder="아이디" required />
                <input type="password" name="password" placeholder="비밀번호" required />
                <button type="submit">로그인</button>
            </form>

            <div id="result"></div>
            <button id="signupButton">회원가입</button>

        </>
  );
}

export default Adminsign; 
