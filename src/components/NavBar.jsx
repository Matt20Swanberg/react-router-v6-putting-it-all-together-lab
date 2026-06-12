import { NavLink } from "react-router-dom";
import './NavBar.css'

/**
 * Application navigation component.
 *
 * Provides navigation links to the Home, Directors,
 * and About pages.
 */
function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}

export default NavBar;
