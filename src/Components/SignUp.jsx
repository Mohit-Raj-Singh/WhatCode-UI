import React, { useContext, useState } from "react";
import "./Login.css";
import logo from "../assets/REFLECT 1.png";
import loginImg from "../assets/login image.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import lower from "../assets/Group 50.png";
import { Link, useNavigate } from "react-router-dom";
import { Appcontext } from "../Context/AppContext";

export const SignUp = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const navigateLogin = () => {
    navigate("/login");
    console.log("object");
  };

  const { handleSignup } = useContext(Appcontext);

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
            <h2>Sign-UP here!</h2>
            <input
              type="text"
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
            <button className="loginBTN" onClick={() => handleSignup(user)}>
              Sign-UP
            </button>
          </div>

          <div className="signupBox">
            <div className="colorGradient"></div>
            <div className="signContent">
              {/* <Link to="/login">Or Login</Link> */}
            </div>
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
