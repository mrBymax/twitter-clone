import React from "react";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="logo">logo</div>
      <ul>
        <li className="active">Home</li>
        <li>Search</li>
        <li>History</li>
      </ul>
    </div>
  );
};

export default Navbar;
