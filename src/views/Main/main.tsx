import Navber from "../../components/navbar";
import Fistmainpage from "./firstpage";

function Main() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Navber />
        <Fistmainpage />
      </div>
      <div></div>
      <div style={{ marginLeft: "250px", height: "100vh" }} id="section1"></div>
    </>
  );
}

export default Main;
