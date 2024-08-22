import React from "react";
import { IoIosList } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";

const SubNavbar = () => {
  return (
    <>
      <div className="sub-nav">
        <div className="navbar">
          <div className="flexbox">
            <IoIosList style={{ fontSize: "1em" }} />
            <p>All Categories</p>
            <FaChevronDown fontSize={"0.75em"} />
          </div>
          <div className="navigation-dropdown-section">
            <div className="flexbox">
              <p>Supply</p>
              <FaChevronDown fontSize={"0.75em"} />
            </div>
            <div className="flexbox">
              <p>Buyer</p>
              <FaChevronDown fontSize={"0.75em"} />
            </div>
            <hr />
            <div className="flexbox">
              <p>Help</p>
              <FaChevronDown fontSize={"0.75em"} />
            </div>
            <div className="flexbox">
              <p>Apps</p>
              <FaChevronDown fontSize={"0.75em"} />
            </div>
            <div className="flexbox">
              <p>English</p>
              <FaChevronDown fontSize={"0.75em"} />
            </div>
            <hr />
            <div className="flexbox">
              <p>Rules</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubNavbar;
