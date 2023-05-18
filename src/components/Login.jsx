import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import LanguageIcon from "@mui/icons-material/Language";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        // Handle the logged-in state if needed
      }
    });
  }, []);

  const navigate = useNavigate();

  function signIn(e) {
    e.preventDefault();
    console.log("log in");

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        // Handle the logged-in state if needed
        navigate("/teslaaccount");
      })
      .catch((error) => {
        alert("no user, please create an account!");
      });
  }

  return (
    <div className="login">
      <div className="login__header">
        <div className="login__logo">
          <Link to="/">
            <img
              className="header__logoImg"
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <div className="login__language">
          <LanguageIcon /> <span>en-US</span>
        </div>
      </div>
      <div className="login__info">
        <h1>Sign In</h1>
        <form className="login__form" onSubmit={signIn}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password"> Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonPrimary name="Sign In" type="submit" />
        </form>
        <div className="login__divider">
          <hr /> <span>OR</span> <hr />
        </div>

        <Link to="/signup">
          <ButtonSecondary name="create account" />
        </Link>
      </div>
    </div>
  );
}

export default Login;
