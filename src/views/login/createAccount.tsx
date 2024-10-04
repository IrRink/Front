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

function CreateAccount() {
  useEffect(() => {
    const signupForm = document.getElementById("signupForm") as HTMLFormElement | null;

    if (!signupForm) return; // signupForm이 null이면 return으로 실행 중단

    const handleFormSubmit = (event: Event) => {
      event.preventDefault(); // 기본 제출 동작 방지

      const formData = new FormData(signupForm);
      const data = Object.fromEntries(formData.entries());

      // 서버에 데이터 전송
      fetch(signupForm.action, {
        method: signupForm.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            return response.text();
          }
          throw new Error("회원가입 실패");
        })
        .then((data) => {
          alert(data); // 서버로부터 받은 메시지 표시
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("회원가입 중 오류 발생");
        });
    };

    signupForm.addEventListener("submit", handleFormSubmit);

    // 컴포넌트가 언마운트되면 이벤트 리스너 제거
    return () => {
      signupForm.removeEventListener("submit", handleFormSubmit);
    };
  }, []);

  const checkIdAvailability = async () => {
    const userId = (document.getElementById("id") as HTMLInputElement).value;

    if (userId) {
      try {
        const response = await fetch(`http://localhost:5500/process/check-id?userId=${userId}`, {
          method: "GET",
        });

        const result = await response.json();
        document.getElementById("idCheckResult")!.innerText = result.message; // 결과 메시지 표시
      } catch (error) {
        console.error("아이디 중복 확인 중 오류 발생:", error);
      }
    } else {
      document.getElementById("idCheckResult")!.innerText = "아이디를 입력하세요.";
    }
  };

  return (
    <SigninfirstDiv>
      <Filter>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <div
            style={{
              padding: "20px 40px",
              backgroundColor: "#ffffff",
              width: "600px",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>회원가입</h1>
            <form id="signupForm" method="POST" action="http://localhost:5500/process/adduser" style={{ textAlign: "center" }}>
              <div style={{ marginBottom: "15px" }}>
                <label htmlFor="id" style={{ display: "block", marginBottom: "5px", color: "#555" }}>아이디:</label>
                <input
                  id="id"
                  name="id"
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "4px",
                    border: "1px solid #ddd",
                    fontSize: "14px",
                  }}
                />
                <button type="button" onClick={checkIdAvailability} style={{
                  marginTop: "5px",
                  padding: "5px 10px",
                  backgroundColor: "#f0f0f0",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}>
                  아이디 중복 확인
                </button>
                <div id="idCheckResult" style={{ marginTop: "5px", color: "#d9534f" }}></div> {/* 결과 메시지 */}
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label htmlFor="name" style={{ display: "block", marginBottom: "5px", color: "#555" }}>이름:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "4px",
                    border: "1px solid #ddd",
                    fontSize: "14px",
                  }}
                />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label htmlFor="age" style={{ display: "block", marginBottom: "5px", color: "#555" }}>나이:</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "4px",
                    border: "1px solid #ddd",
                    fontSize: "14px",
                  }}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="password" style={{ display: "block", marginBottom: "5px", color: "#555" }}>비밀번호:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "4px",
                    border: "1px solid #ddd",
                    fontSize: "14px",
                  }}
                />
              </div>
              <button type="submit" style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontSize: "16px",
                cursor: "pointer",
              }}>가입하기</button>
            </form>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <a href="/signin" style={{ textDecoration: "none", fontSize: "14px" }}>이미 회원이신가요? 로그인하러 가기</a>
            </div>
          </div>
        </div>
      </Filter>
    </SigninfirstDiv>
  );
}

export default CreateAccount;
