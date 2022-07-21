import Courses from "./Courses";
import Footer from "./Footer/Footer";
import Header from "./Header";

import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Home({ isAuth }) {
  const [courses, setCourses] = useState([]);

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
  }, []);

  // const [postLists, setPostList] = useState([]);
  // const postsCollectionRef = collection(db, "posts");

  // useEffect(() => {
  //   const getPosts = async () => {
  //     const data = await getDocs(postsCollectionRef);
  //     setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getPosts();
  // }, [deletePost]);

  // const deletePost = async (id) => {
  //   const postDoc = doc(db, "posts", id);
  //   await deleteDoc(postDoc);
  // };
  return (
    <div>
      <Header />

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

        {/* <section id="why-us" className="why-us">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="content">
                  <h3>Why Choose Betterdegree?</h3>
                  <p>
                    Pro Teachers dedicated to your success. Helping your reach
                    your goals stay competitive and relevant in the changing
                    workplace, join millions of students who have already
                    transformed their lives with us.
                  </p>
                  <div className="text-center">
                    <a href="about.html" className="more-btn">
                      Learn More <i className="bx bx-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-8 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <h4>The best way to learn English online</h4>
                        <p>
                          "LP English course was the best way to take my English
                          skils to the level with the possibility to speak to
                          competent teachers at any time, from anywhere. The
                          lessons helped me improve my skills and made me feel
                          more confident when speaking English."
                        </p>
                        <p>Christina Ivanova</p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <h4>A powerful tool to progress in English</h4>
                        <p>
                          “I've been experiencing EF English Live for 3 months
                          and I was able to measure my progress, with real help
                          from worldwide teachers. This is really what I was
                          looking for: people from everywhere, with very
                          different accents and cultures to improve my listening
                          skills.”
                        </p>
                        <p>Ameli Petrova</p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <h4>Now I speak English better</h4>
                        <p>
                          “My experience with English Live has been amazing,
                          thanks to the classes with native teachers and being
                          able to interact with people from all over. My
                          pronunciation has changed for the better, and I've
                          stopped being afraid to communicate.”
                        </p>
                        <p>Georgi Simeonov</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <Courses courses={courses} />
      </main>

      <Footer />

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
