function Courses({ courses }) {
  return (
    <section id="popular-courses" className="courses">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Courses</h2>
          <p>Popular Courses</p>
        </div>

        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          {courses.map((course) => (
            <div
              key={course.id}
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
            >
              <div className="course-item">
                <img src={course.img} className="img-fluid" alt="..." />
                <div className="course-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4>{course.title}</h4>
                    <p className="price">${course.price}</p>
                  </div>

                  <h3>
                    <a href="course-details.html">{course.details}</a>
                  </h3>
                  <p>{course.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
