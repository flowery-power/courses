import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();

  const onRegisterFormSubmitHandler = ({ email, password, repeatPassword }) => {
    if (password !== repeatPassword) {
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <section className="contact">
      <form
        className="php-email-form"
        onSubmit={handleSubmit(onRegisterFormSubmitHandler)}
      >
        <fieldset>
          <legend>Register</legend>
          <p className="field">
            <label htmlFor="email">Email</label>
            <span className="input">
              <input
                {...register("email")}
                type="text"
                name="email"
                id="email"
              />
              <span className="actions"></span>
              <i className="fas fa-user"></i>
            </span>
          </p>
          <p className="field">
            <label htmlFor="password">Password</label>
            <span className="input">
              <input
                {...register("password")}
                type="password"
                name="password"
                id="password"
              />
              <span className="actions"></span>
              <i className="fas fa-key"></i>
            </span>
          </p>
          <p className="field">
            <label htmlFor="repeatPassword">Password</label>
            <span className="input">
              <input
                {...register("repeatPassword")}
                type="password"
                name="repeatPassword"
                id="repeatPassword"
              />
              <span className="actions"></span>
              <i className="fas fa-key"></i>
            </span>
          </p>
          <input className="button submit" type="submit" value="Register" />
        </fieldset>
      </form>
    </section>
  );
}

export default Register;
