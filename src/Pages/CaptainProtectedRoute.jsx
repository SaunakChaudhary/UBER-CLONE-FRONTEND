import { useContext, useEffect } from "react";
import { CaptainDataContext } from "../Context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const CaptainProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { setCaptain } = useContext(CaptainDataContext);
  const token = localStorage.getItem("token");

  const getUserData = async () => {
    try {
      await axios
        .get("http://localhost:5000/captains/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 201) {
            setCaptain(response.data.user);
          }
        });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    if (!token) {
      return navigate("/captains-login");
    }
    getUserData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getUserData, token]);

 
  return <>{children}</>;
};

export default CaptainProtectedRoute;
