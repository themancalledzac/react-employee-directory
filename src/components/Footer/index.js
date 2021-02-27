import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Footer = () => {
  return (
    <nav
      className='footer navbar navbar-expand-lg navbar-dark bg-dark'
      style={{
        marginTop: "4rem",
        position: "absolute",
        bottom: "0",
        borderTop: "4rem",
      }}
    >
      <NavLink className='navbar-brand' to='/'>
        Employee Directory
      </NavLink>
      <div>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link' href='https://zacedens.com'>
              Portfolio
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='https://github.com/themancalledzac'>
              Github
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Footer;
