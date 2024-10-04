import styled, { createGlobalStyle } from "styled-components";

function Fourgongfour() {
  const FirstMainDiv = styled.div`
    width: calc(100% - 250px);
    height: 100vh;
    background-image: url("404.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-left: 250px;
  `;

  return (
    <>
      <FirstMainDiv style={{ position: "relative" }}>
        <div>
          <div
            style={{
              width: "50vw",
              margin: "auto",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                backgroundColor: " rgba(255, 255, 255, 0.568)",
                padding: "100px",
                borderRadius: "15px",
              }}
            >
              권한이 없거나 존재하지 않는 페이지입니다.
              <br />
              <button
                style={{
                  backgroundColor: " rgba(255, 255, 255, 0)",
                  border: "1px solid red",
                  fontSize: "20px",
                  fontWeight: "700",
                  padding: "15px",
                  borderRadius: "100px",
                  marginTop: "60px",
                }}
                onClick={() => (window.location.href = "/")}
              >
                돌아가기
              </button>
            </h1>
          </div>
        </div>
      </FirstMainDiv>
    </>
  );
}

export default Fourgongfour;
