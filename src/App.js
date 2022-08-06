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
import Footer from "./components/Footer/Footer";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  const authInfo = {
    isAuthenticated: Boolean(user),
    email: user?.email,
    id: user?.uid,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/all-courses" element={<AllCourses />} />
          <Route path="/create" element={<CourseCreate />} />
          <Route path="/findYourCourse" element={<Events />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<SignIn />} />

          <Route
            path="/courses/details/:courseId"
            element={<CourseDetails />}
          />
          <Route path="/courses/:courseId/edit" element={<CourseEdit />} />
          {/* <Route path="/courses/details/edit" exact element={<CourseEdit />} /> */}

          {/*
        <Route path="/pets/create" component={CreatePet} />
        <Route path="/pets/:petId/edit" component={EditPet} /> */}

          <Route path="/logout" element={<Logout />} />
        </Routes>
        <div>
          <Header />

          <Footer />

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
