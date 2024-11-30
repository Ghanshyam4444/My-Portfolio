import "./navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand nav_link ms-4 p-font" to="/">
          Ghanshyam
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse p-font" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            {/* Aligns nav items to the right */}
            <li className="nav-item mx-1">
              <NavLink
                className="nav-link nav_link"
                to="/about"
                aria-current="page"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink className="nav-link nav_link" to="/education">
                Education
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink className="nav-link nav_link" to="/keyskills">
                Key Skills
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink className="nav-link nav_link" to="/projects">
                Projects
              </NavLink>
            </li>
            <li className="nav-item mx-1">
              <NavLink className="nav-link nav_link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
