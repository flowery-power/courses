import React from "react";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import AllCourses from "./components/AllCourses/AllCourses";
import Home from "./components/Home";
import Events from "./components/Events";
import SignIn from "./components/SignIn/SignIn";
import { Route, Routes, Navigate } from "react-router-dom";
import { auth } from "./firebase-config";
import CourseCreate from "./components/CourseCreate/CourseCreate";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import { CourseEdit } from "./components/CourseEdit/CourseEdit";
import isAuth from "./hoc/isAuth";
import { useEffect, useState } from "react";
import AuthContext from "./contexts/AuthContext";
import Logout from "./components/Logout/Logout";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  const authInfo = {
    isAuthenticated: Boolean(user),
    email: user?.email,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/all-courses" element={<AllCourses />} />
          <Route path="/createCourse" element={<CourseCreate />} />
          <Route path="/findYourCourse" element={<Events />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<SignIn />} />

          <Route path="/courses/details/edit" exact element={<CourseEdit />} />

          <Route
            path="/courses/details/:courseId"
            exact
            element={<CourseDetails />}
          />
          <Route
            path="/courses/details/:courseId/edit"
            component={isAuth(<CourseEdit />)}
          />
          {/*
        <Route path="/pets/create" component={CreatePet} />
        <Route path="/pets/:petId/edit" component={EditPet} /> */}
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <div>
          <Header />
          {/* 
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
        </section> */}

          {/* <main id="main">
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div
                  className="col-lg-6 order-1 order-lg-2"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <img
                    src="assets/img/about.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                  <h3>The world's number one online courses.</h3>
                  <p className="fst-italic">
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

          <Courses />
        </main> */}

          {/* <Footer /> */}

          {/* <div id="preloader"></div> */}
          {/* <a
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a> */}
        </div>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
