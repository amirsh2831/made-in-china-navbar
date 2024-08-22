import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { PiCameraThin } from "react-icons/pi";
import { CgSearch } from "react-icons/cg";

const SearchBar = () => {
  return (
    <>
      <div className="searchbar">
        <button className="products">
          <p>Products</p>
          <FaChevronDown />
        </button>
        <input placeholder="Enter a keyword to search products" />
        <div className="search-icons">
          <button>
            <PiCameraThin style={{ fontSize: "1.5em" }} />
          </button>
          <button className="search-button">
            <CgSearch />
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
