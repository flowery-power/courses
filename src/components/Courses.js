function Courses() {
  return (
    <section id="popular-courses" className="courses">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Courses</h2>
          <p>Popular Courses</p>
        </div>

        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="course-item">
              <img
                src="assets/img/course-1.jpg"
                className="img-fluid"
                alt="..."
              />
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>English for Academic Study</h4>
                  <p className="price">$169</p>
                </div>

                <h3>
                  <a href="course-details.html">English for Academic Study</a>
                </h3>
                <p>
                  Prepare to study at university, explore the qualities of a
                  successful student, and learn key vocabulary in an academic
                  context.
                </p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img
                      src="assets/img/trainers/trainer-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <span>Anton</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;50 &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;65
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="course-item">
              <img
                src="assets/img/events-2.jpg"
                className="img-fluid"
                alt="..."
              />
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>English Pronunciation in a Global World</h4>
                  <p className="price">$250</p>
                </div>

                <h3>
                  <a href="course-details.html">
                    English Pronunciation in a Global World
                  </a>
                </h3>
                <p>
                  In this course, you will improve your English pronunciation
                  skills and learn about speaking English in today's globalised
                  world.
                </p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img
                      src="assets/img/trainers/trainer-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <span>Lora</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;35 &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;42
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="course-item">
              <img
                src="assets/img/course-3.jpg"
                className="img-fluid"
                alt="..."
              />
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>B1 English level (intermediate)</h4>
                  <p className="price">$180</p>
                </div>

                <h3>
                  <a href="course-details.html">B1 English level</a>
                </h3>
                <p>
                  English level B1 describes independent users of the language.
                  Learners at this level can communicate with other English
                  speakers.
                </p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img
                      src="assets/img/trainers/trainer-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <span>Boris</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;20 &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;85
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
