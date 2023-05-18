import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "./MenuItem";
import Menu from "./Menu";
import "../styles/HeaderBlock.css"

function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div>
      <div className="header">
        <div className="header__logo">
          <Link to="/">
            <img
              className="header__logoImg"
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <div className="header__links">
          <Link to="/">Modal S</Link>
          <Link to="/">Modal 3</Link>
          <Link to="/">Modal X</Link>
          <Link to="/">Modal Y</Link>
          <Link to="/">Solar Roof</Link>
          <Link to="/">Solar Panels</Link>
        </div>
        <div className="header__right">
          <Link to="/" className={isMenuOpen && "header__link--hidden"}>
            Shop
          </Link>
          <Link to="/login" className={isMenuOpen && "header__link--hidden"}>
            Tesla Account
          </Link>
          <div
            className="header__menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </div>
      <div className="headerBlock">
        <div className="headerBlock__info">
          <div className="headerBlock__infoText">
            <h1>Model 3</h1>
            <h4>
              Order online For <span>Touchless Delivery</span>
            </h4>
          </div>
          <div className="headerBlock__actions">
            <button className="headerBlock__buttonPrimary">Custom Order</button>
            <button className="headerBlock__buttonSecondary">
              Existing Inventory
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && <Menu />}
    </div>
  );
}

export default Header;
