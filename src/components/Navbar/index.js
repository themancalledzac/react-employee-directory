import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <NavLink className='navbar-brand' to='/'>
        Employee Directory
      </NavLink>
      <div>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink
              to='/'
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='employees'
              className={
                window.location.pathname === "/employees"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Employees
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/'
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={() => window.open("https://www.zacedens.com", "_blank")}
            >
              Portfolio
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
