import styled from "styled-components";

const SigninfirstDiv = styled.div`
  width: calc(100% - 250px);
  height: 100vh;
  background-image: url("image1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 250px;
`;

function Signin() {
  return (
    <SigninfirstDiv>
      <a href="/">123</a>
    </SigninfirstDiv>
  );
}

export default Signin;
