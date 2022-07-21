import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreateCourse({ isAuth }) {
  const [title, setTitle] = useState("");
  const [courseText, setCourseText] = useState("");

  const coursesCollectionRef = collection(db, "courses");
  let navigate = useNavigate();

  const CreateCourse = async () => {
    await addDoc(coursesCollectionRef, {
      title,
      img,
      price,
      details,
      type,
      duration,
      startDate,
      // lector: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createCoursePage">
      <div className="cpContainer">
        <h1>Create A Course</h1>
        <div className="inputGp">
          <label>Course Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter course title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label>Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label>details</label>
          <input
            type="text"
            id="details"
            name="details"
            placeholder="..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label>price</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Price..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label>duration</label>
          <input
            type="number"
            id="duration"
            name="duration"
            placeholder="duration..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label>startDate</label>
          <input
            type="number"
            id="startDate"
            name="startDate"
            placeholder="Star date..."
            onChange={(event) => {
              setCourseText(event.target.value);
            }}
          />
        </div>
        <button onClick={CreateCourse}>Create</button>
      </div>
    </div>
  );
}

export default CreateCourse;
