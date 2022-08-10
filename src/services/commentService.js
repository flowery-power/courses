import { db } from "../firebase-config";
import {
  addDoc,
  deleteDoc,
  doc,
  collection,
  getDocs,
} from "firebase/firestore";

export const create = (courseId, comment) => {
  const coursesRef = collection(db, "courses");

  return addDoc(collection(coursesRef, courseId, "comments"), { comment });
};

export const remove = (courseId, commentId) => {
  let commentCollectionRef = collection(db, `courses/${courseId}/comments`);

  return deleteDoc(doc(commentCollectionRef, commentId));
};

export const getByCourseId = async (courseId) => {
  let commentCollectionRef = collection(db, `courses/${courseId}/comments`);

  const comments = await getDocs(commentCollectionRef);

  return comments.docs.map((comment) => ({
    id: comment.id,
    ...comment.data(),
  }));
};
