import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../contexts/AuthContext";

import * as coursesService from "../../services/coursesService";
import Comments from "../Comments/Comments";
import { CommentContext } from "../../contexts/CommentContext";

export default function CourseDetails() {
  const navigate = useNavigate();
  const {
    addComment,
    removeComment,
    commentsLoaded,
    commentsState,
    setComments,
  } = useContext(CommentContext);

  const { id, isAuthenticated } = useContext(AuthContext);

  let [course, setCourse] = useState({});
  let { courseId } = useParams();

  useEffect(() => {
    coursesService.getOne(courseId).then((res) => {
      setCourse(res);
    });
  });

  const handleDel = () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (confirmation) {
      coursesService.remove(courseId).then(() => {
        navigate("/all-courses");
      });
    }
  };

  return (
    <main id="main">
      <div className="breadcrumbs" data-aos="fade-in">
        <div className="container">
          <h2>Details</h2>
          <p></p>
        </div>
      </div>

      <section id="course-details" className="course-details">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6">
              <img src={course.img} className="img-fluid" alt="" />
              <h3>{course.title}</h3>
              <p>{course.details}</p>
            </div>
            <div className="col-lg-4">
              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Category</h5>
                <p>{course.type}</p>
              </div>

              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Price</h5>
                <p>${course.price}</p>
              </div>

              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Start Date</h5>
                <p>{course.startdate}</p>
              </div>

              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Duration</h5>
                <p>{course.duration}</p>
              </div>

              <div className="mb-5">
                {id === course.userId && isAuthenticated && (
                  <div className="buttons">
                    <Link to={`/courses/${courseId}/edit`} className="myButton">
                      Edit
                    </Link>
                    <Link to="#">
                      <button onClick={handleDel} className="myButton">
                        Delete
                      </button>
                    </Link>
                  </div>
                )}
              </div>
              <Comments
                isAuthenticated={isAuthenticated}
                addComment={addComment}
                removeComment={removeComment}
                commentsLoaded={commentsLoaded}
                state={commentsState}
                courseId={courseId}
                setComments={setComments}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="cource-details-tabs" className="cource-details-tabs">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1"></div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
