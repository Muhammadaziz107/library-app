import React, { useRef, useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";

function Header() {
  const elNavbar = useRef(null);
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="hamburger_wrapper">
              <Hamburger
                toggled={open}
                toggle={setOpen}
                color="#fff"
                rounded
                hideOutline={false}
                size={25}
                direction="right"
                onToggle={evt => {
                  elNavbar.current.classList.toggle("header__navbar--active");
                }}
              />
            </div>
            <nav className="header__wrapper__nav " ref={elNavbar}>
              <ul className="header__wrapepr__nav__list">
                <li className="header__wrapepr__nav__list__item">
                  <NavLink className="header__wrapepr__nav__list__item__link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="header__wrapepr__nav__list__item">
                  <NavLink
                    className="header__wrapepr__nav__list__item__link"
                    to="/library"
                  >
                    Library
                  </NavLink>
                </li>
                <li className="header__wrapepr__nav__list__item">
                  <NavLink className="header__wrapepr__nav__list__item__link" to="/">
                    Courses
                  </NavLink>
                </li>
                <li className="header__wrapepr__nav__list__item">
                  <NavLink
                    className="header__wrapepr__nav__list__item__link"
                    to="/profile"
                  >
                    Profile
                  </NavLink>
                </li>
              </ul>
            </nav>

            <nav className="header__login_box">
              <ul className="header__login_box__list">
                <li className="header__login_box__list_item">
                  <NavLink className="header__wrapepr__nav__list__item__link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="header__login_box__list_item">
                  <NavLink
                    className="header__wrapepr__nav__list__item__link"
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
