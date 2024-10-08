import Footer from "../../components/footer/footer";
import Navber from "../../components/navbar";
import Loginnavbar from "../login/loginnavbar";
import Fistmainpage from "./firstpage";
import Second from "./second";
import Third from "./third";

function Main() {
  if (localStorage.getItem("userName")) {
    console.log("로그인 성공");
  } else {
    alert("세션이 만료되었거나 로그인을 하지 않으셨습니다. 재 로그인 해주세요");
    window.location.href = "/signin";
  }

  return (
    <>
      <div style={{ display: "flex" }} id="goRoot">
        <Loginnavbar />
        <Navber />
        <Fistmainpage />
      </div>
      <div></div>
      <div style={{ marginLeft: "250px", height: "60vh" }} id="section1">
        <Second />
      </div>
      <div style={{ marginLeft: "250px", height: "60vh" }} id="section1" >
        <Third />
        <Footer /> 
      </div>
    </>
  );
}

export default Main;
