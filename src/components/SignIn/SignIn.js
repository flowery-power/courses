import React from "react";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();

  const onLoginFormSubmitHandler = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      navigate("/");
    });
  };

  return (
    <section id="contact" class="contact">
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
                  class="form-control"
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

    // <section className="contact">
    //   <form
    //     className="php-email-form"
    //     onSubmit={handleSubmit(onLoginFormSubmitHandler)}
    //   >
    //     <fieldset>
    //       <legend>Sign In</legend>
    //       <p className="field">
    //         <label htmlFor="email">Email</label>
    //         <span className="input">
    //           <input
    //             {...register("email", { required: true })}
    //             type="text"
    //             name="email"
    //             id="email"
    //             placeholder="Email"
    //           />
    //           <span className="actions"></span>
    //           <i className="fas fa-user"></i>
    //         </span>
    //       </p>
    //       <p className="field">
    //         <label htmlFor="password">Password</label>
    //         <span className="input">
    //           <input
    //             {...register("password", { required: true })}
    //             type="password"
    //             name="password"
    //             id="password"
    //             placeholder="Password"
    //           />
    //           <span className="actions"></span>
    //           <i className="fas fa-key"></i>
    //         </span>
    //       </p>
    //       <input className="button submit" type="submit" value="Login" />
    //     </fieldset>
    //   </form>
    // </section>
  );
};

export default SignIn;
