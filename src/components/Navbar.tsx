import React from "react";
import SearchBar from "./SearchBar";
import Links from "./Links";
import SubNavbar from "./SubNavbar";
const Navbar = () => {
  return (
    <>
      <header>
        <div className="nav">
          <div className="navbar">
            <img
              src="src/assets/Logo.png"
              alt="Main Logo"
              width={100}
              height={100}
              className="logo"
            />
            <SearchBar />
            <Links />
          </div>
        </div>
        <div>
          <SubNavbar />
        </div>
      </header>
    </>
  );
};

export default Navbar;
