import React, { useEffect, useState } from "react";
import Courses from "../Courses/Courses";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";

export default function AllCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "courses")).then((coursesSnapshot) => {
      setCourses(
        coursesSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
  }, []);

  return (
    <div>
      <Courses courses={courses} />
    </div>
  );
}
