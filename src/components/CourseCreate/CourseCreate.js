import React, { useState, useEffect, useContext } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import AuthContext from "../../contexts/AuthContext";

import uniqid from "uniqid";

function CourseCreate() {
  const [courses, setCourses] = useState("");
  const { isAuthenticated, email } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const coursesCollectionRef = collection(db, "courses");
  let navigate = useNavigate();
  const addCourseHandler = (courseData) => {
    setCourses((state) => [
      ...state,
      {
        ...courseData,
        _id: uniqid(),
      },
    ]);

    navigate("/all-courses");
  };

  const onSubmit = async (courseData) => {
    addCourseHandler(courseData);

    await addDoc(coursesCollectionRef, {
      ...courseData,
      // lector: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <section id="contact" className="contact">
        <div className="col-lg-8 mt-5 mt-lg-0">
          <form className="php-email-form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Create A Course</h1>
            <div className="row justify-content-center">
              <div className="col-md-6 form-group">
                <label>Course Title:</label>

                <input
                  {...register("title", { required: true })}
                  type="text"
                  name="title"
                  className="form-control"
                  id="title"
                  placeholder="Enter course title..."
                  required
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 form-group">
                <label>Image:</label>

                <input
                  {...register("img", { required: true })}
                  type="text"
                  name="img"
                  className="form-control"
                  id="img"
                  placeholder="/assets/img/..."
                  required
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 form-group">
                <label>Details:</label>

                <textarea
                  {...register("details", { required: true })}
                  type="text"
                  name="details"
                  className="form-control"
                  id="details"
                  placeholder="Enter course details"
                  required
                ></textarea>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 form-group">
                <label>Price:</label>
                <input
                  {...register("price", { required: true })}
                  type="number"
                  name="price"
                  className="form-control"
                  id="price"
                  placeholder="Price"
                  required
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 form-group">
                <label>Duration:</label>
                <input
                  {...register("duration", { required: true })}
                  type="text"
                  name="duration"
                  className="form-control"
                  id="duration"
                  placeholder="Duration"
                  required
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 form-group">
                <label>Start date:</label>
                <input
                  {...register("startdate", { required: true })}
                  type="text"
                  name="startdate"
                  className="form-control"
                  id="startdate"
                  placeholder="Start date"
                  required
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 form-group">
                <label>Course Type:</label>
                <input
                  {...register("type", { required: true })}
                  type="text"
                  name="type"
                  className="form-control"
                  id="type"
                  placeholder="Ex: Information Technology"
                  required
                />
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Create</button>
            </div>{" "}
          </form>
        </div>
      </section>
    </>
  );
}

export default CourseCreate;
