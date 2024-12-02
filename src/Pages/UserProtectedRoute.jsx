import { useContext, useEffect } from "react";
import { UserDataContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const UserProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);
  const token = localStorage.getItem("token");
  const getUserData = async () => {
    try {
      await axios
        .get("http://localhost:5000/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 201) {
            setUser(response.data.user);
            navigate("/home");
          }
        });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    if (!token) {
      return navigate("/user-login");
    }
    getUserData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getUserData, token]);

 
  return <>{children}</>;
};

export default UserProtectedRoute;
