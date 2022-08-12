import React from "react";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";

import "./SingIn.css";

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const onLoginFormSubmitHandler = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password).then(() => {
      navigate("/");
    });
  };

  return (
    <section id="sign-in" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="col-lg-8 mt-5 mt-lg-0">
          <form
            className="php-email-form"
            onSubmit={handleSubmit(onLoginFormSubmitHandler)}
          >
            <div className="row justify-content-center">
              <div className="col-md-6 form-group">
                <input
                  {...register("email", { required: true })}
                  type="text"
                  name="email"
                  className="form-control"
                  id="name"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input
                  {...register("password", { required: true })}
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  required
                />
              </div>
            </div>

            <div className="text-center">
              <button type="submit">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
