const baseUrl = "http://localhost:3030/data/comments";

export const create = (courseId, comment) => {
  const coursesRef = collection(db, "courses");

  return addDoc(collection(coursesRef, courseId, "comments"), comment);
};
