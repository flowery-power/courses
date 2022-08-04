import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as coursesService from "../../services/coursesService";

export default function CourseDetails() {
  const navigate = useNavigate();

  let [course, setCourse] = useState({});
  let { courseId } = useParams();

  // const currentCourse = selectCourse(courseId);

  useEffect(() => {
    coursesService.getOne(courseId).then((res) => {
      setCourse(res);
    });
  }, []);

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

  // const onPetButtonClickHandler = () => {
  //   let incrementedLikes = pet.likes + 1;

  //   coursesService
  //     .pet(match.params.petId, incrementedLikes)
  //     .then((updatedPet) => {
  //       setPet((state) => ({
  //         ...state,
  //         likes: Number(updatedPet.likes),
  //       }));
  //     });
  // };

  // const courseDeleteHandler = () => {
  //

  return (
    // <section id="course-details">
    //   <h1> Details</h1>
    //   <div className="info-section">
    //     <div className="course-header">
    //       <img className="course-img" src={course.imageUrl} />
    //       <h1>{course.title}</h1>
    //       <span className="levels">price: {course.price}</span>
    //       <p className="type">{course.category}</p>
    //     </div>
    //   </div>

    //   <p className="text">{course.summary}</p>

    //   <div className="details-comments">
    //     <h2>Details</h2>
    //     <p>{course.details}</p>

    //     <p className="no-comment">No comments.</p>
    //   </div>

    //   <div className="buttons">
    //     <Link to={`/courses/details/${course.id}/edit`}>
    //       <button className="button">Edit</button>
    //     </Link>
    //     <Link to="#">
    //       <button onClick={handleDel} className="button">
    //         Delete
    //       </button>
    //     </Link>
    //   </div>
    //   <article className="create-comment">
    //     <label>Add new comment:</label>
    //     <form className="form">
    //       <textarea name="comment" placeholder="Comment......"></textarea>
    //       <input className="btn submit" type="submit" value="Add Comment" />
    //     </form>
    //   </article>
    // </section>

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
            <div className="col-lg-8">
              <img src={course.img} className="img-fluid" alt="" />
              <h3>{course.title}</h3>
              <p>{course.details}</p>
            </div>
            <div className="col-lg-4">
              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Categoty</h5>
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
                    <div>
                      <div className="buttons">
                        <Link
                          to={`/courses/${courseId}/edit`}
                          className="myButton"
                        >
                          Edit
                        </Link>
                        <Link to="#">
                          {" "}
                          <button onClick={handleDel} className="myButton">
                            Delete{" "}
                          </button>{" "}
                        </Link>{" "}
                      </div>{" "}
                      <article className="create-comment">
                        <label>Add new comment:</label>{" "}
                        <form className="form">
                          {" "}
                          <textarea
                            name="comment"
                            placeholder="Comment......"
                          ></textarea>{" "}
                          <input
                            className="myButton"
                            type="submit"
                            value="Add Comment"
                          />{" "}
                        </form>{" "}
                      </article>
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
