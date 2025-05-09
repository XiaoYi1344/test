// LoginStatus.jsx
import React from "react";

function LoginStatus({ isLoggedIn }) {
  return (
    <div>
      The user is <b>{isLoggedIn ? "currently" : "not"}</b> logged in.
    </div>
  );
}

export default LoginStatus;
