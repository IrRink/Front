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
function Admincreate() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault(); // Prevent the default form submission

  //     const data = { id, name, age, password };

  //     try {
  //         const response = await fetch('http://localhost:5500/process/addadmin', {
  //             method: 'POST',
  //             headers: {
  //                 'Content-Type': 'application/json',
  //             },
  //             body: JSON.stringify(data),
  //         });

  //         if (response.ok) {
  //             const result = await response.text(); // or response.json() if you send JSON back
  //             alert(result); // Show success message
  //         } else {
  //             const errorMessage = await response.text();
  //             throw new Error(errorMessage); // Handle server errors
  //         }
  //     } catch (error) {
  //         console.error('Error:', error);
  //     }
  // };
  const handleSubmit = async () => {
    const data = { id, name, age, password };

    try {
      const response = await fetch("http://localhost:5500/process/addadmin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.text(); // or response.json() if you send JSON back
        alert(result); // Show success message
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage); // Handle server errors
      }
    } catch (error) {
      console.error("Error:", error);
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
          <h1 style={{ marginBottom: "30px" }}>관리자 회원가입</h1>
          <form id="signupForm" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="id">아이디:</label> <br />
              <Input
                type="text"
                id="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="name">이름:</label>
              <br />
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="age">나이:</label>
              <br />
              <Input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">비밀번호:</label>
              <br />
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* <button type="submit" style={{
                    backgroundColor : '#007bff',
                    color : 'white',
                    border : 'none',
                    padding : '10px',
                    fontWeight : '600',
                    width : '60%',
                    borderRadius : '10px'
                }}>가입하기</button> */}
            <button
              type="button"
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "10px",
                fontWeight: "600",
                width: "60%",
                borderRadius: "10px",
              }}
              onClick={handleSubmit}
            >
              가입하기
            </button>
          </form>
          <button
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
            onClick={() => (window.location.href = "/adminsign")}
          >
            이미 관리자 이신가요? 관리자 로그인
          </button>
        </div>
      </Filter>
    </FirstMainDiv>
  );
}

export default Admincreate;
