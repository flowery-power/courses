import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import * as coursesService from "../../services/coursesService";
import AuthContext from "../../contexts/AuthContext";

export const CourseEdit = () => {
  const [course, setCourse] = useState({});
  const { courseId } = useParams();
  const { isAuthenticated, email } = useContext(AuthContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    coursesService.getOne(courseId).then((courseData) => {
      setCourse(courseData);
    });
  }, []);

  useEffect(() => {
    reset(course);
  }, [course]);

  const onSubmit = (courseData) => {
    coursesService.edit(courseId, courseData).then((result) => {
      setCourse(courseId, result);
      navigate(`/courses/details/${courseId}`);
    });
  };
  return (
    <>
      <section id="contact" className="contact">
        <div className="col-lg-8 mt-5 mt-lg-0">
          <form className="php-email-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row justify-content-center">
              <div className="col-md-6 form-group mt-3">
                <input
                  {...register("title")}
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 form-group mt-3">
                <input
                  {...register("price")}
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 form-group mt-3">
                <input
                  {...register("img")}
                  type="text"
                  className="form-control"
                  id="imageUrl"
                  name="imageUrl"
                />
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-6 form-group mt-3">
                <input
                  {...register("details")}
                  type="text"
                  className="form-control"
                  id="details"
                  name="details"
                />
              </div>

              <div className="row justify-content-center">
                <div className="col-md-6 form-group mt-3">
                  <input
                    {...register("startdate")}
                    type="text"
                    className="form-control"
                    id="stardate"
                    name="stardate"
                  />
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-md-6 form-group mt-3">
                  <input
                    {...register("duration")}
                    type="text"
                    className="form-control"
                    id="duration"
                    name="duration"
                  />
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-md-6 form-group mt-3">
                  <input
                    {...register("type")}
                    type="text"
                    className="form-control"
                    id="type"
                    name="type"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Edit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
