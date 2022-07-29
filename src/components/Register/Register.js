import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
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
    <section id="contact" className="contact">
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
                type="text"
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

// <section className="contact">
//   <form
//     className="php-email-form"
//     onSubmit={handleSubmit(onRegisterFormSubmitHandler)}
//   >
//     <fieldset>
//       <legend>Register</legend>
//       <p className="field">
//         <label htmlFor="email">Email</label>
//         <span className="input">
//           <input
//             {...register("email", { required: true })}
//             type="text"
//             name="email"
//             id="email"
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
//           />
//           <span className="actions"></span>
//           <i className="fas fa-key"></i>
//         </span>
//       </p>
//       <p className="field">
//         <label htmlFor="repeatPassword">Password</label>
//         <span className="input">
//           <input
//             {...register("repeatPassword", { required: true })}
//             type="password"
//             name="repeatPassword"
//             id="repeatPassword"
//           />
//           <span className="actions"></span>
//           <i className="fas fa-key"></i>
//         </span>
//       </p>
//       <input className="button submit" type="submit" value="Register" />
//     </fieldset>
//   </form>
// </section>

export default Register;