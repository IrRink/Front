import styled from "styled-components";
import { useRef, useState } from "react";

const SigninFirstDiv = styled.div`
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

const LoginForm = styled.form`
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 14px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const Result = styled.div`
  margin-top: 10px;
  color: #d9534f;
`;

function Login() {
  const userIdRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const adminCheckboxRef = useRef<HTMLInputElement | null>(null);
  const [resultMessage, setResultMessage] = useState<string>("");

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userId = userIdRef.current?.value;
    const password = passwordRef.current?.value;
    const isAdmin = adminCheckboxRef.current?.checked;

    if (!userId || !password) {
      setResultMessage("사용자 ID와 비밀번호를 입력하세요.");
      return;
    }

    const loginUrl = isAdmin
      ? "http://localhost:5500/process/login/admin"
      : "http://localhost:5500/process/login";

    const formData = new URLSearchParams();
    formData.append("userId", userId);
    formData.append("password", password);

    try {
      const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      if (response.ok) {
        const result = await response.text();
        setResultMessage(result);
      } else {
        const error = await response.text();
        setResultMessage(error);
      }
    } catch (error) {
      console.error("로그인 요청 중 오류 발생:", error);
      setResultMessage("로그인 요청 중 오류 발생");
    }
  };

  return (
    <SigninFirstDiv>
      <Filter>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div
            style={{
              padding: "20px 40px",
              backgroundColor: "#ffffff",
              width: "400px",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
              로그인
            </h1>
            <LoginForm id="loginForm" onSubmit={handleFormSubmit}>
              <Input
                type="text"
                ref={userIdRef}
                name="userId"
                placeholder="사용자 ID"
                required
                autoComplete="username"
              />
              <Input
                type="password"
                ref={passwordRef}
                name="password"
                placeholder="비밀번호"
                required
                autoComplete="current-password"
              />
              <label>
                <input type="checkbox" ref={adminCheckboxRef} id="adminCheckbox" />
                관리자 로그인
              </label>
              <Button type="submit">로그인</Button>
            </LoginForm>
            {resultMessage && <Result id="result">{resultMessage}</Result>}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button
                onClick={() => (window.location.href = "/signup")}
                style={{ textDecoration: "none", fontSize: "14px" }}
              >
                회원가입
              </button>
            </div>
          </div>
        </div>
      </Filter>
    </SigninFirstDiv>
  );
}

export default Login;
