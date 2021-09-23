import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://toppng.com/uploads/preview/svg-free-library-collection-of-high-quality-free-cliparts-space-needle-clip-art-11563529785uhxzfbjd4d.png"
        alt="Spot"
      />
      <a href={loginUrl}>LOGIN WITH SPOT</a>
    </div>
  );
}

export default Login;
