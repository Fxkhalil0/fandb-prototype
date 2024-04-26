import React from "react";
import Logo from "../../../assets/logo.svg";

function Navbar() {
  return (
    <>
      <div className="container">
        <nav>
            <img src={Logo} alt="logo" />
            <h1>Welcome, Admin</h1>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
