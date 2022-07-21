import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";

import uniqid from "uniqid";

function CreateCourse({ isAuth }) {
  const [courses, setCourses] = useState("");

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

    // navigate("/catalog");
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const courseData = Object.fromEntries(new FormData(e.target));

    console.log(courseData);

    addCourseHandler(courseData);

    await addDoc(coursesCollectionRef, {
      ...courseData,
      // lector: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createCoursePage">
      <form onSubmit={onSubmit}>
        <div className="cpContainer">
          <h1>Create A Course</h1>
          <div className="inputGp">
            <label>Course Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter course title..."
            />
          </div>
          <div className="inputGp">
            <label>Image:</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              placeholder="Upload a photo..."
            />
          </div>
          <div className="inputGp">
            <label>Details</label>
            <input type="text" id="details" name="details" placeholder="..." />
          </div>
          <div className="inputGp">
            <label>Price</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Price..."
            />
          </div>
          <div className="inputGp">
            <label>Duration</label>
            <input
              type="number"
              id="duration"
              name="duration"
              placeholder="duration..."
            />
          </div>
          <div className="inputGp">
            <label>StartDate</label>
            <input
              type="number"
              id="startDate"
              name="startDate"
              placeholder="Star date..."
            />
          </div>
          <input className="btn submit" type="submit" value="Create Game" />{" "}
        </div>
      </form>
    </div>
  );
}

export default CreateCourse;
