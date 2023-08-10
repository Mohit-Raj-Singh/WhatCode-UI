import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Appcontext = createContext();

const AppcontextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("linkedInappauth") || false
  );

  const [msg, setMsg] = useState("");
  const [posts, SetPost] = useState();
  const navigate = useNavigate();
  const token = localStorage.getItem("linkedInapptoken");

  const handleLogin = (user) => {
    let { email, password } = user;
    if (email && password) {
      fetch("http://localhost:4500/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.msg === "Login success") {
            localStorage.setItem("linkedInapptoken", data.token);
            navigate("/city");
          } else if (data.msg === "Invaild credentials") {
            alert(data.msg);
            navigate("/login");
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Sign Up first");
    }
  };

  const handleSignup = (user) => {
    let { email, password } = user;
    if (email && password) {
      fetch("http://localhost:4500/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.msg === "User registered.") {
            navigate("/login");
          } else if (data.msg === "Please login, user already exist") {
            alert(data.msg);
            navigate("/login");
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please provide all fields.");
    }
  };

  const data = {
    posts,
    isAuth,
    handleLogin,
    handleSignup,
  };
  return <Appcontext.Provider value={data}>{children}</Appcontext.Provider>;
};

export default AppcontextProvider;
