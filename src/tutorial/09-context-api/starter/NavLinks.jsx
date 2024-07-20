import React from "react";
import UserContainer from "./UserContainer";

const NavLinks = ({ user, logout }) => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a>home</a>
        </li>
        <li>
          <a>about</a>
        </li>
      </ul>
      <UserContainer user={user} logout={logout} />
    </div>
  );
};

export default NavLinks;
