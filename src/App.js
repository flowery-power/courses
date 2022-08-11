import React from "react";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import AllCourses from "./components/AllCourses/AllCourses";
import Home from "./components/Home";
import SignIn from "./components/SignIn/SignIn";
import { Route, Routes } from "react-router-dom";
import { auth } from "./firebase-config";
import CourseCreate from "./components/CourseCreate/CourseCreate";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import { CourseEdit } from "./components/CourseEdit/CourseEdit";
import { useEffect, useState } from "react";
import { CommentProvider } from "./contexts/CommentContext";

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
        <CommentProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/all-courses" element={<AllCourses />} />
            <Route path="/create" element={<CourseCreate />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/login" element={<SignIn />} />

            <Route
              path="/courses/details/:courseId"
              element={<CourseDetails />}
            />
            <Route path="/courses/:courseId/edit" element={<CourseEdit />} />

            <Route path="/logout" element={<Logout />} />
          </Routes>
          <div>
            <Header />

            <Footer />
          </div>
        </CommentProvider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
