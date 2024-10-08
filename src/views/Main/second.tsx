import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";

const Box = styled.div`
  margin: 0 auto;
  background-color: rgb(249, 249, 254);
  padding: 20px;
  height: 80px;
  box-shadow: 0px 15px 4px 2px rgba(180, 180, 180, 0.24);
  border-radius: 15px;
`;


function Second() {
  const [member, setMember] = useState(0);
  const [date, setDate] = useState(0);
  async function info() {
    const response = await fetch("http://localhost:5500/process/adminAndUserCount");
    const data = await response.json();
    console.log(data.admin_date)
    const num = Number(data.userCount); 
    setMember(num);
    setDate(data.admin_date.split('T')[0])
  }

  useEffect(() => {
    info();
  }, []);
  


  const box1Ref = useRef<HTMLHeadingElement>(null);
  console.log('member', member)

  const people = member;
  
  const counting = () => {

      for (let i = 0; i <= people; i++) {
        setTimeout(() => {
          if (box1Ref.current) {
            box1Ref.current.innerText = i.toString();
          }
        }, i * 10);
      } 
  };
  
  let hasScrolled = false; // 실행 여부를 확인할 변수

  window.addEventListener('scroll', function() {
      if (window.scrollY > 300 && !hasScrolled) {
          hasScrolled = true; // 이미 실행된 경우를 표시
          counting();
      }
  });
  

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1", marginTop: "15vh" }}>
        <div style={{ margin: "0 auto", width: "70%" }}>
          <Box
            style={{
              borderBottom: "10px solid rgb(54, 85, 255)",
            }}
          >
            총 회원수
            <h1 id="box1" style={{ textAlign: "center" }} ref={box1Ref}>
            </h1>
          </Box>
          <div style={{ display: "flex", marginTop: "30px" }}>
            <Box
              style={{
                flex: "1",
                borderBottom: "10px solid rgb(55, 168, 120)",
                borderRadius: "15px",
                width: "48%",
                marginRight: "4%",
              }}
            >
              총 포스팅
            </Box>

            <Box
              style={{
                flex: "1",
                borderBottom: "10px solid rgb(246, 86, 96)",
                width: "48%",
              }}
            >
              블로그 운영
              <h2 style={{textAlign : 'center', marginTop : '15px'}}>
              {date}
              </h2>
            </Box>

          </div>
        </div>
      </div>

      <div
        style={{
          flex: "1",
          textAlign: "center",
          marginTop: "25vh",
          position: "relative",
        }}
      >
        <img
          src="bomb.gif"
          alt=""
          style={{ position: "absolute", left: "0" }}
        />
        <img
          src="bomb.gif"
          alt=""
          style={{
            position: "absolute",
            right: "0",
            transform: "rotateY(180deg)",
          }}
        />
        <h1 style={{ fontSize: "45px" }}>
          여러분들의 방문을
          <br />
          진심으로 환영 합니다!
        </h1>
        <p style={{ color: "#535353", fontWeight: "100" }}>
          WEB 개발에 있어 다양한 개발 지식을 다루는 전문적인 블로그가 <br />{" "}
          되기 위해 노력하겠습니다. 😃
        </p>
      </div>
    </div>
  );
}

export default Second;
