function Header() {
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
              <a className="active" href="index.html">
                Home
              </a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="courses.html">Courses</a>
            </li>

            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <a href="courses.html" className="get-started-btn">
          Get Started
        </a>
      </div>
    </header>
  );
}

export default Header;
