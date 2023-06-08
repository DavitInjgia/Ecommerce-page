import React, { useState } from "react";
import HeaderTemplate from "./HeaderTemplate";
import logo from "../../assets/images/logo.svg";
import Navigation from "./components/Navigation/Navigation";
import UserInfo from "./components/UserInfo/UserInfo";
import BurgerMenuNavPanel from "./components/Navigation/BurgerMenuNavPanel";
import "./Header.css";
import burgerNavIcon from "../../assets/images/icon-menu.svg";
import closeBurgerNavIcon from "../../assets/images/icon-close.svg";

function Header(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let navWidth;
  let navItemDisplay;
  let nawItemOpacity;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (isMenuOpen == false) {
    navWidth = "0";
    navItemDisplay = "none";
    nawItemOpacity = "0"
  } else {
    navWidth = "75%";
    navItemDisplay = "block";
    nawItemOpacity = "1"
  }

  return (
    <HeaderTemplate
      logo={<img src={logo} style={{ zIndex: "2" }}></img>}
      nav={<Navigation />}
      userInfo={<UserInfo handleCart={props.handleCart} />}
      dropdown={props.dropdown}
      burgerNav={
        <nav>
          <button onClick={toggleMenu} id="burger-nav-btn">
            <img src={burgerNavIcon}></img>
          </button>
          <BurgerMenuNavPanel
            navItemDisplay={navItemDisplay}
            nawItemOpacity ={nawItemOpacity}
            navWidth={navWidth}
            collections={"Collection"}
            men={"Men"}
            women={"Women"}
            about={"About"}
            contact={"Contact"}
          />
        </nav>
      }
    />
  );
}

export default Header;
