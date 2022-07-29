import { NavLink, Link } from "react-router-dom";

function Header({ user }) {
  let activeClassName = "active";

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
      <span>Welcome, {user?.email}</span>
      <li>
        <NavLink
          to="findYourCourse"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Find Your Course
        </NavLink>
      </li>
      <li>
        <NavLink
          to="all-courses"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          All Courses
        </NavLink>
      </li>
    </>
  );

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <a href="index.html">Betterdegree</a>
        </h1>

        <a href="index.html" className="logo me-auto">
          <img src="assets/img/logo.png" alt="" className="img-fluid" />
        </a>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>{user ? userNavigation : guestNavigation}</ul>

          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        {!user && (
          <Link to="register" className="get-started-btn">
            Register for free
          </Link>
        )}

        {/* <a href="courses.html" className="get-started-btn">
          Register for free
        </a> */}
      </div>
    </header>
  );
}

export default Header;
