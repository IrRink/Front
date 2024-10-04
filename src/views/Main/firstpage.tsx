import styled, { createGlobalStyle } from "styled-components";
import React, { useCallback, useEffect } from "react";

// 글로벌 스타일 정의
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'TTLaundryGothicB';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2403-2@1.0/TTLaundryGothicB.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  body {
    font-family: 'TTLaundryGothicB', sans-serif;
  }
`;

const FirstMainDiv = styled.div`
  width: calc(100% - 250px);
  height: 100vh;
  background-image: url("https://tistory1.daumcdn.net/tistory/4939852/skin/images/allLogo2.jpg");
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

function FirstMainPage() {
  const list = ["Math", "Science", "english", "Korean", "Social"];
  let num = 0;

  const running = useCallback(() => {
    const writtextElement = document.getElementById("writtext");
    if (writtextElement) {
      writtextElement.innerHTML = `Hello World !<br />Let’s Get it <span style="color: rgb(255, 201, 64);">${list[num]}</span>`;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      num += 1;
      if (num > 4) {
        num = 0;
      }
    }
    setTimeout(running, 2000);
  }, []);

  useEffect(() => {
    running();
  }, [running]);

  return (
    <FirstMainDiv>
      <Filter>
        <GlobalStyle />
        <h1
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "4vw",
            paddingTop: "30vh",
          }}
          id="writtext"
        >
          .
        </h1>
        <div
          style={{
            borderBottom: "1px solid white",
            width: "40vw",
            margin: "50px auto",
          }}
        ></div>
        <h2 style={{ color: "white", textAlign: "center" }}>
          안녕 세계! 나에게 프로그래밍 세상을 보여줘서 고마워
        </h2>
        <h2
          style={{
            margin: "50px auto",
            textAlign: "center",
            border: "1px solid white",
            width: "30px",
            padding: "20px",
            borderRadius: "50%",
            color: "white",
          }}
        >
          v
        </h2>
      </Filter>
    </FirstMainDiv>
  );
}

export default FirstMainPage; // Exporting the component
