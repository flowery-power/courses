import Courses from "./Courses/Courses";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    getDocs(collection(db, "courses")).then((coursesSnapshot) => {
      setCourses(
        coursesSnapshot.docs
          .map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
          .slice(0, 3)
      );
    });

    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);

  return (
    <div>
      <Header user={user} />

      <section
        id="hero"
        className="d-flex justify-content-center align-items-center"
      >
        <div
          className="container position-relative"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h1>
            Join The Education Revolution
            <br />
          </h1>
          <h2>with the world's number one online courses.</h2>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div
                className="col-lg-6 order-1 order-lg-2"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>The world's number one online courses.</h3>
                <p>
                  Welcome to Bestdegree online courses. We are proud to offer
                  you an exclusive range of Professional study options. Our
                  world-class Pro Teachers, combined with our interactive and
                  award-winning live learning platform, help you gain real
                  confidence in your new language.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    Create an ultimate learning experience
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    Pro Teachers dedicated to your success.
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    Train employee skills from any device anywhere
                  </li>
                </ul>
                <p>
                  Betterdegree online courses offers a world-class learning
                  experience with career-enhancing qualifications.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Courses courses={courses} />
      </main>

      {/* <Footer /> */}

      {/* <div id="preloader"></div> */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
}

export default Home;
