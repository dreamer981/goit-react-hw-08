import { NavLink } from "react-router-dom";

export const AuthNav = () => (
  <nav>
    <NavLink to="/register">Register</NavLink>
    <NavLink to="/login">Login</NavLink>
  </nav>
);
