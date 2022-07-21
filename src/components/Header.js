import { NavLink, Link } from "react-router-dom";

function Header() {
  let activeClassName = "active";

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
          <ul>
            <li>
              <NavLink
                to="findYourCourse"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Find Your Course
              </NavLink>
            </li>
            <li>
              <NavLink
                to="courses"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                All Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="login"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Sign in
              </NavLink>
            </li>
          </ul>

          {/* <ul>
            <li>
              <a className="active" href="index.html">
                Find Your Course
              </a>
            </li>
            <li>
              <a href="about.html">All Courses</a>
            </li>
            <li>
              <a href="courses.html">Why Us?</a>
            </li>

            <li>
              <a href="contact.html">Sign in</a>
            </li>
          </ul> */}
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <Link to="register" className="get-started-btn">
          Register for free
        </Link>

        {/* <a href="courses.html" className="get-started-btn">
          Register for free
        </a> */}
      </div>
    </header>
  );
}

export default Header;
