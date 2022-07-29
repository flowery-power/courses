import React from "react";

export default function CourseDetails() {
  return (
    <section id="course-details">
      <h1> Details</h1>
      <div className="info-section">
        <div className="course-header">
          <img className="course-img" src={course.imageUrl} />
          <h1>{course.title}</h1>
          <span className="levels">MaxLevel: {course.maxLevel}</span>
          <p className="type">{course.category}</p>
        </div>

        <p className="text">{course.summary}</p>

        <div className="details-comments">
          <h2>Details</h2>
          <p>{course.details}</p>

          {/* <ul>
            <li className="comment">
              <p>Content: I rate this one quite highly.</p>
            </li>
            <li className="comment">
              <p>Content: The best game.</p>
            </li>
          </ul>
           */}
          <p className="no-comment">No comments.</p>
        </div>

        <div className="buttons">
          <a href="#" className="button">
            Edit
          </a>
          <a href="#" className="button">
            Delete
          </a>
        </div>
      </div>

      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form">
          <textarea name="comment" placeholder="Comment......"></textarea>
          <input className="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>
    </section>
  );
}
