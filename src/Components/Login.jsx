import React from "react";
import "./Login.css";
import logo from "../assets/REFLECT 1.png";
import loginImg from "../assets/login image.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import lower from "../assets/Group 50.png";

export const Login = () => {
  return (
    <div className="mainBox">
      <div className="navLogo">
        <img src={logo} alt="logo" className="logoimg" />
      </div>

      <div className="loginContainer">
        <div className="aceImage">
          <img src={loginImg} alt="login" className="loginImage" />
        </div>
        <div className="loginInput">
          <div className="login2">
            <h2>Login here!</h2>
            <input
              type="text"
              className="usernameI"
              placeholder="Username or phone"
            />
            <br />
            <input type="text" className="usernameI" placeholder="Password" />
            <p className="forgotPwd">Forgot Password?</p>
            <button className="loginBTN">Login</button>
          </div>

          <div className="signupBox">
            <div className="colorGradient"></div>
            <div className="signContent">Or Sign-up With</div>
            <div className="colorGradient2"></div>
          </div>

          <div className="icons">
            <div className="gIcon">
              {" "}
              <FcGoogle className="google" />{" "}
            </div>
            <div className="gIcon">
              {" "}
              <FaFacebook className="facebook" />
            </div>
          </div>
        </div>
      </div>
      <div className="lowerImg">
        <img src={lower} alt="lower" className="lowerr" />
      </div>
    </div>
  );
};
