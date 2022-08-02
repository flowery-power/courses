import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";

const Logout = () => {
  const navigate = useNavigate();
  const { user, userLogout } = useContext(AuthContext);

  useEffect(() => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/");
      });
  });

  return null;
};

export default Logout;
