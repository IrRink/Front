import styled from "styled-components"; // createGlobalStyle 추가

const NavberMainDiv = styled.div`
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: white;
  box-shadow: 0px 10px 5px 5px #5c5c5c6e;
`;

const Profilimg = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50px;
  transform: translate(-50%, 0%);
  border-radius: 25px;
`;

const RainbowText = styled.p`
  @keyframes rainbow {
    0% {
      color: red;
    }
    15% {
      color: red;
    }
    20% {
      color: orange;
    }
    35% {
      color: orange;
    }
    40% {
      color: yellow;
    }
    55% {
      color: yellow;
    }
    60% {
      color: green;
    }
    75% {
      color: green;
    }
    80% {
      color: blue;
    }
    95% {
      color: purple;
    }
    100% {
      color: red;
    }
  }
  font-size: 20px;
  animation: rainbow 8s linear infinite;
`;
const MenuLi = styled.li`
  margin-left: 20px;
  margin-top: 15px;
`;
function Navber() {
  var name = localStorage.getItem("name");
  return (
    <NavberMainDiv>
      <img
        src="https://tistory1.daumcdn.net/tistory/4939852/skin/images/istock.webp"
        alt=""
        style={{ width: "100%", height: "95px", objectFit: "cover" }}
      />
      <Profilimg src="irlinklogo.png" alt="" />
      <div style={{ height: "60px" }}></div>
      <p style={{ textAlign: "center", marginTop: "10px" }}>{name}</p>
      <div>
        <ul
          style={{
            textAlign: "center",
            width: "70%",
            margin: "0 auto",
            listStyleType: "none",
            borderRadius: "100px",
            padding: "10px",
            boxShadow: "0px 0px 6px 4px #a5a5a56c",
            marginTop: "20px",
          }}
        >
          <li>
            <a href="/">🏡 home</a>
          </li>
        </ul>
      </div>

      <div
        style={{ borderBottom: "1px solid #d8d8d8", marginTop: "30px" }}
      ></div>
      <ul
        style={{
          marginLeft: "30px",
          listStyleType: "none",
          paddingTop: "20px",
        }}
      >
        <li style={{}}>
          <a href="#goRoot">
            <RainbowText>ROOT</RainbowText>
          </a>
        </li>
        <MenuLi>
          <a href="#section1">
            <p>introduce &nbsp; ▶</p>
          </a>
        </MenuLi>
      </ul>
    </NavberMainDiv>
  );
}

export default Navber;
