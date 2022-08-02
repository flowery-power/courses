import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const isAuth = (WrappedComponent) => {
  const Component = (props) => {
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    if (!isAuthenticated) {
      navigate("/login");

      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return Component;
};

export default isAuth;
