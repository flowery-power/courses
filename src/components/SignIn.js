import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignIn = ({ history }) => {
  let navigate = useNavigate();
  const auth = getAuth();

  const onLoginFormSubmitHandler = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, username, password).then(
      (userCredential) => {
        navigate("/");
      }
    );
  };

  return (
    <section className="contact">
      <form className="php-email-form" onSubmit={onLoginFormSubmitHandler}>
        <fieldset>
          <legend>Sign In</legend>
          <p className="field">
            <label htmlFor="username">Username</label>
            <span className="input">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
              <span className="actions"></span>
              <i className="fas fa-user"></i>
            </span>
          </p>
          <p className="field">
            <label htmlFor="password">Password</label>
            <span className="input">
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
          <input className="button submit" type="submit" value="Login" />
        </fieldset>
      </form>
    </section>
  );
};

export default SignIn;
