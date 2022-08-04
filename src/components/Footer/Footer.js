import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    // <div id="footer">
    //   <div className="footer-top">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-lg-3 col-md-6 footer-contact">
    //           <h3>Betterdegree</h3>
    //           <p>
    //             <strong>Phone:</strong> +359 888 554 855
    //             <br />
    //             <strong>Email:</strong> course@prodigy.com
    //             <br />
    //           </p>
    //         </div>

    //         <div className="col-lg-4 col-md-6 footer-links">
    //           {/* <h4>Useful Links</h4> */}
    //           <ul>
    //             <li>
    //               <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
    //             </li>
    //             <li>
    //               <i className="bx bx-chevron-right"></i>
    //               <Link to="findYourCourse">Events</Link>
    //             </li>
    //             <li>
    //               <i className="bx bx-chevron-right"></i>{" "}
    //               <Link to="/all-courses">Courses</Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    <div className="footer">
      <div className="container d-md-flex py-4">
        <strong>&copy;Betterdegree.Designed by Tsvetelina Gabrovska</strong>
      </div>
      <div className="credits"></div>
    </div>
  );
}

export default Footer;
