import { NavLink, Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { useContext } from "react";

import AuthContext from "../../contexts/AuthContext";

function Header() {
  let activeClassName = "active";
  const { isAuthenticated, email } = useContext(AuthContext);

  let guestNavigation = (
    <>
      <li>
        <NavLink
          to="all-courses"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          All Courses
        </NavLink>
      </li>
      <li>
        <NavLink
          to="login"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Sign in
        </NavLink>
      </li>
    </>
  );

  let userNavigation = (
    <>
      <li>
        <NavLink
          to="all-courses"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          All Courses
        </NavLink>
      </li>
      <li>
        <NavLink
          to="create"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Create Course
        </NavLink>
      </li>
    </>
  );

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <Link to="/">Betterdegree</Link>
        </h1>

        <a href="index.html" className="logo me-auto">
          <img src="assets/img/logo.png" alt="" className="img-fluid" />
        </a>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>{isAuthenticated ? userNavigation : guestNavigation}</ul>

          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        {!isAuthenticated && (
          <Link to="register" className="get-started-btn">
            Register
          </Link>
        )}

        {isAuthenticated && (
          <Nav>
            <NavDropdown title={email}>
              <NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/logout">
                  logout
                </NavDropdown.Item>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        )}
      </div>
    </header>
  );
}

export default Header;
