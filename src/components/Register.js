import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onRegisterFormSubmitHandler = ({ email, password, repeatPassword }) => {
    if (password !== repeatPassword) {
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <section className="register">
      <form onSubmit={onRegisterFormSubmitHandler}>
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
                placeholder="Email"
              />
              <span className="actions"></span>
              <i className="fas fa-user"></i>
            </span>
          </p>
          <p className="field">
            <label htmlFor="password">Password</label>
            <span className="input" {...register("password")}>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <span className="actions"></span>
              <i className="fas fa-key"></i>
            </span>
          </p>
          <p className="field">
            <label htmlFor="repeat-password" {...register("repeatPassword")}>
              Password
            </label>
            <span className="input">
              <input
                type="password"
                name="password"
                id="repeat-password"
                placeholder="Password"
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
