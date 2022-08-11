import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import "./Register.css";

function Register() {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const onRegisterFormSubmitHandler = ({ email, password, repeatPassword }) => {
    if (password !== repeatPassword) {
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <section id="register" className="contact">
      <div className="col-lg-8 mt-5 mt-lg-0">
        <form
          className="php-email-form"
          onSubmit={handleSubmit(onRegisterFormSubmitHandler)}
        >
          <div className="row justify-content-center">
            <div className="col-md-6 form-group">
              <input
                {...register("email", { required: true })}
                type="text"
                name="email"
                className="form-control"
                id="email"
                placeholder="Your email"
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
          <div className="row justify-content-center">
            <div className="col-md-6 form-group mt-3">
              <input
                {...register("repeatPassword", { required: true })}
                type="password"
                className="form-control"
                name="repeatPassword"
                id="repeatPassword"
                placeholder="Repeat Password"
                required
              />
            </div>
          </div>

          <div className="text-center">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;
