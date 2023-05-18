import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import LanguageIcon from "@mui/icons-material/Language";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth } from "../firebase/firebase";

function Login({ name }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

function signIn() {
signInWithEmailAndPassword(auth, email, password)
.then((user) => {
  console.log(user)
})
.catch((error) => {
  alert("nope")
})
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
        <h1>Sigh In</h1>
        <form className="login__form">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email"> Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonPrimary name="Sign In" type="submit" onclick={signIn} />
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
