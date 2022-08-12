import {
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
  addDoc,
  collection,
} from "firebase/firestore";
import { db } from "../firebase-config";

export const getOne = async (courseId) => {
  const docRef = doc(db, "courses", courseId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
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
  });
};

export const edit = (courseId, courseData) =>
  updateDoc(doc(db, "courses", courseId), courseData);
