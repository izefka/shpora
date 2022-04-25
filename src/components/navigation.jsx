import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <div class="menu">
        <input type="checkbox" id="check-menu" />
        <label for="check-menu">
          <div className="burger-line first"></div>
          <div className="burger-line second"></div>
          <div className="burger-line third"></div>
          <div className="burger-line forth"></div>
        </label>
        <nav className="main-menu">
          <NavLink to="/components">Components</NavLink>
          <NavLink to="/props">Props</NavLink>
          <NavLink to="/state">State</NavLink>
          <NavLink to="/lifecycle">Lifecycle</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/key">Key</NavLink>
          <NavLink to="/refs">Refs</NavLink>
          <NavLink to="/asynchron">Asynchronous request</NavLink>
          <NavLink to="/virtual_DOM">Virtual DOM</NavLink>
          <NavLink to="/fragment">Fragment</NavLink>
          <NavLink to="/memo">React.memo</NavLink>
          <NavLink to="/useEffect">useEffect</NavLink>
          <NavLink to="/router">Router</NavLink>
          <NavLink to="/context">Context</NavLink>
          <NavLink to="/form">Form</NavLink>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
