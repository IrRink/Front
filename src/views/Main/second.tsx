import styled from "styled-components";
import React, { useEffect } from "react";

const Box = styled.div`
margin : 0 auto;
background-color : rgb(249, 249, 254);
padding : 20px;
height : 80px;
box-shadow : 0px 15px 4px 2px rgba(180, 180, 180, 0.24);
border-radius : 15px;
`;

  function Second() {
    const people = 1200;
    useEffect(() => {
      const box1 = document.getElementById('box1');
      if (box1) {
        for (let i = 0; i <= people; i++) {
          setTimeout(() => {
            box1.innerText = i+'명'
          }, i * 10);
        }
      }
    }, []);

  return (
    <div style={{display : 'flex', }}>
      <div style={{flex : '1', marginTop : '15vh'}}>
        <div style={{margin : '0 auto', width : '70%'}}>
            <Box style={{ 
              borderBottom : '10px solid rgb(54, 85, 255)',
              }}>총 회원수
              <h1 id="box1" style={{textAlign : 'center'}}>sad</h1>
              </Box>
            <div style={{display : 'flex', marginTop : '30px'}}>
              <Box style={{
                flex : '1',
                borderBottom : '10px solid rgb(55, 168, 120)',
                borderRadius : '15px',
                width : '48%',
                marginRight:'4%',
              }}>총 포스팅</Box>

              <Box style={{
                flex : '1',
                borderBottom : '10px solid rgb(246, 86, 96)',
                width : '48%',
              }}>블로그 운영</Box>
            </div>
        </div>
    </div>

      <div style={{flex : '1', textAlign : 'center', marginTop : '25vh', position : 'relative'}}>
        
    <img src="bomb.gif" alt="" style={{position : 'absolute', left : '0'}}/>
    <img src="bomb.gif" alt="" style={{position : 'absolute', right : '0',transform: 'rotateY(180deg)'}}/>
          <h1 style={{fontSize : '45px'}}>여러분들의 방문을<br />진심으로 환영 합니다!</h1>	
          <p style={{color : '#535353', fontWeight : '100'}}>
          WEB 개발에 있어 다양한 개발 지식을 다루는 전문적인 블로그가 <br /> 되기 위해 노력하겠습니다. 😃
            </p>	
            
      </div>
    </div>
  );
}

export default Second;
