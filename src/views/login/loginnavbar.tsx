function Loginnavbar() {
  var name = localStorage.getItem("name");
  console.log(name);
  function logout() {
    localStorage.clear();
    window.location.href = "/signin";
  }
  return (
    <>
      <div
        style={{
          marginTop: "20px",
          width: "calc(100% - 500px )",
          marginLeft: "375px",
          position: "fixed",
          left: "0",
          top: "0",
          zIndex: "999",
          height: "6vh",
        }}
      >
        <div
          style={{
            backgroundColor: " rgba(255, 255, 255, 0.929)",
            height: "70px",
            borderRadius: "15px",
            display: "flex",
            boxShadow: "0px 0px 15px 4px rgba(134, 134, 134, 0.411)",
          }}
        >
          <div style={{ flex: "1", textAlign: "center", marginTop: "25px" }}>
            {name}님 반가워요.
          </div>
          <div style={{ flex: "1", textAlign: "center", marginTop: "25px" }}>
            블로거 네임
          </div>
          <div style={{ flex: "1", textAlign: "center", marginTop: "25px" }}>
            <p style={{ cursor: "pointer" }} onClick={logout}>
              로그아웃
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginnavbar;
