import React from "react";
import { NavLink } from "react-router-dom";

import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header} >
      <div className={classes.logo}>JSON PLACEHOLDER</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/posts" activeClassName ={classes.active} >Posts</NavLink>
          </li>
          <li>
            <NavLink to="/albums"  activeClassName ={classes.active}>Albums </NavLink>
          </li>
          <li>
            <NavLink to="/todos"  activeClassName ={classes.active}>Todos</NavLink>
          </li>
          <li>
            <NavLink to="/users"  activeClassName ={classes.active}>Users</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
