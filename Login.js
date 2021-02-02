import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/9b064649177903.56084ea344766.jpg"
        alt="Asshole Logo"
      />
      <a href={loginUrl}>LOGIN WITH ASSHOLE</a>
    </div>
  );
}

export default Login;