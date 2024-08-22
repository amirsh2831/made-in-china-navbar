import React from "react";
import { Navlinks } from "../constants";
const Links = () => {
  return (
    <>
      <div className="nav-links">
        {Navlinks.map((item, i) => (
          <div key={item.text + i}>
            <span>{item.icon}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Links;
