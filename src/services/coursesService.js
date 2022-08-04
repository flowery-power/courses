import { doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../firebase-config";

import { createContext } from "react";

// export const getAll = (category = "") => {
//   let petsUrl =
//     url + (category && category != "all" ? `?category=${category}` : "");

//   return fetch(petsUrl)
//     .then((res) => res.json())
//     .then((pets) => pets.map((x) => ({ ...x, likes: Number(x.likes) })))
//     .catch((error) => console.log(error));
// };

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
// export const create = (petName, description, imageURL, category) => {
//   let pet = {
//     name: petName,
//     description,
//     imageURL,
//     category,
//     likes: 0,
//   };

//   return fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(pet),
//   });
// };

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
