import styled from "styled-components";
import Post from "./post/post";

function Third() {
  const AllTextText = styled.h1`
    text-decoration: underline;
    text-decoration-style: double;
    text-decoration-color: yellow;
    margin: 0 0 10px 50px;
  `;

  return (
    <div style={{ width: "70%", margin: "0 auto" }} id="thrid">
      <div style={{ width: "100%", borderBottom: "2px solid black" }}>
        <AllTextText>전체 글</AllTextText>
      </div>
      <Post />
    </div>
  );
}

export default Third;
