import React, { useState } from "react";
import styled from "styled-components";

const FirstMainDiv = styled.div`
  width: calc(100% - 250px);
  height: 100vh;
  background-image: url("https://mblogthumb-phinf.pstatic.net/MjAxODExMDFfMjAz/MDAxNTQxMDQyMDY5NTEx.FXtZtQMJrTxA5l4iaugmBbZsZSnqYr2P5mSD88sRGHEg.nCu_eIKCiFggIKRTGDLuENReCuX6JAKJ-P5kpEv-Rqcg.GIF.yellowouk2/1540993780381.GIF?type=w800");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 250px;
`;

const Input = styled.input`
  background-color: white;
  border: 1px solid gray;
  border-radius: 10px;
  font-size: 15px;
  padding: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 80%;
`;

const Filter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 2, 18, 0.568);
`;

function Adminsign() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new URLSearchParams();
    formData.append("id", id);
    formData.append("password", password);

    try {
      const response = await fetch(
        "http://localhost:5500/process/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        }
      );

      if (response.ok) {
        const resultText = await response.text();
        setResult(resultText);
        console.log(resultText);
        localStorage.setItem("name", resultText);
        console.log(result);
        window.location.href = "../";
      } else {
        const errorText = await response.text();
        setResult(errorText);
      }
    } catch (error) {
      console.error("로그인 요청 중 오류 발생:", error);
    }
  };

  return (
    <FirstMainDiv>
      <Filter>
        <div style={{ paddingTop: "25vh" }}></div>
        <div
          style={{
            margin: "auto",
            width: "600px",
            textAlign: "center",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h1 style={{ marginBottom: "30px" }}>관리자 로그인</h1>
          <form id="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="id">아이디:</label>
            <br />
            <Input
              type="text"
              name="id"
              placeholder="아이디"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
            <br />
            <label htmlFor="id">비밀번호:</label>
            <br />
            <Input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <button
              type="submit"
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "10px",
                fontWeight: "600",
                width: "60%",
                borderRadius: "10px",
              }}
            >
              로그인
            </button>
          </form>

          <button
            id="signupButton"
            style={{
              backgroundColor: "white",
              color: "gray",
              border: "none",
              padding: "10px",
              fontWeight: "600",
              width: "60%",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = "/admincreate")}
          >
            관리자가 아니신가요? 회원가입 하러 가기
          </button>
          <button
            id="signupButton"
            style={{
              backgroundColor: "white",
              color: "gray",
              border: "none",
              padding: "10px",
              fontWeight: "600",
              width: "60%",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = "/signin")}
          >
            게스트로 로그인 하기
          </button>
        </div>
      </Filter>
    </FirstMainDiv>
  );
}

export default Adminsign;
