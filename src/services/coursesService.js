import { doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";

import { createContext } from "react";

export const CourseContext = createContext();

export const getOne = async (courseId) => {
  const docRef = doc(db, "courses", courseId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

export const remove = (courseId) => {
  return deleteDoc(doc(db, "courses", courseId));
};
export const create = (courseData, userId) => {
  courseData = { ...courseData, userId };
  const coursesCollectionRef = collection(db, "courses");

  return addDoc(coursesCollectionRef, {
    ...courseData,
    // lector: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
  });
};

export const edit = (courseId, courseData) =>
  updateDoc(doc(db, "courses", courseId), courseData);

// export const pet = (petId, likes) => {
//   return fetch(`${url}/${petId}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ likes }),
//   }).then((res) => res.json());
// };
