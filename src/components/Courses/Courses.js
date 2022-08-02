import { Link } from "react-router-dom";

function Courses({ courses }) {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <h2>Courses</h2>
          <p>
            Est dolorum ut non facere possimus quibusdam eligendi voluptatem.
            Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis
            ipsam aperiam consequatur laboriosam nemo harum praesentium.{" "}
          </p>
        </div>
      </div>

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
                      <h4>{course.type}</h4>
                      <p className="price">${course.price}</p>
                    </div>

                    <h3>
                      <Link
                        to={{
                          pathname: `/courses/details/${course.id}`,
                          query: {
                            course: course,
                          },
                        }}
                      >
                        {course.title}
                      </Link>
                    </h3>
                    <p>{course.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;
