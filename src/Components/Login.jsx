import React, { useContext, useState } from "react";
import "../Styles/Login.css";
import logo from "../assets/REFLECT 1.png";
import loginImg from "../assets/login image.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import lower from "../assets/Group 50.png";
import { useNavigate } from "react-router-dom";
import { Appcontext } from "../Context/AppContext";

export const Login = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { handleLogin } = useContext(Appcontext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

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
              type="email"
              className="usernameI"
              placeholder="Username or Email"
              onChange={handleChange}
              name="email"
            />
            <br />
            <input
              type="password"
              className="usernameI"
              placeholder="Password"
              onChange={handleChange}
              name="password"
            />
            <p className="forgotPwd">Forgot Password?</p>
            <button className="loginBTN" onClick={() => handleLogin(user)}>
              Login
            </button>
          </div>

          <div className="signupBox">
            <div className="colorGradient"></div>
            <div className="signContent"></div>
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
