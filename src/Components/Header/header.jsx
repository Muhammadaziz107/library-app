import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <nav className="header__wrapper__nav">
            <ul className="header__wrapepr__nav__list">
              <li className="header__wrapepr__nav__list__item">
                <NavLink className="header__wrapepr__nav__list__item__link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="header__wrapepr__nav__list__item">
                <NavLink className="header__wrapepr__nav__list__item__link" to="/">
                  Library
                </NavLink>
              </li>
              <li className="header__wrapepr__nav__list__item">
                <NavLink className="header__wrapepr__nav__list__item__link" to="/">
                  Courses
                </NavLink>
              </li>
            </ul>
          </nav>

          <nav className="header__login_box">
            <ul className="header__login_box__list">
              <li className="header__login_box__list_item">
                <NavLink className="header__wrapepr__nav__list__item__link" to="/">
                  Login
                </NavLink>
              </li>
              <li className="header__login_box__list_item">
                <NavLink className="header__wrapepr__nav__list__item__link" to="/">
                  Register
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
