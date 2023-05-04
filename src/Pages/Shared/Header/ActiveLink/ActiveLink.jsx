import React from 'react';
import { NavLink } from "react-router-dom";
const ActiveLink = ({to, children}) => {
    return (
        <NavLink
  to={to}
  className={({ isActive }) =>
    isActive ? "text-decoration-none ps-5 text-danger fw-bolder fs-5" : "text-decoration-none ps-5 text-white"
  }
>
  {children}
</NavLink>
    );
};

export default ActiveLink;