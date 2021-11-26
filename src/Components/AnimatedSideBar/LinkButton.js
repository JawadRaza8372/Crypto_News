import React from "react";
import { NavLink } from "react-router-dom";
function LinkButton({ title, link, children }) {
  return (
    <>
      <NavLink to={`${link}`} exact={true} activeClassName="activenavLink">
        {children}
        <span className="linkName">{title}</span>
      </NavLink>
      <span className="tooltip">{title}</span>
    </>
  );
}

export default LinkButton;
