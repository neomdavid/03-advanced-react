import React, { useState } from "react";

const UserContainer = ({ user, logout }) => {
  return (
    <div className="user-container">
      {user ? (
        <>
          <div>Hello There, {user?.name?.toUpperCase()}</div>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
};

export default UserContainer;
