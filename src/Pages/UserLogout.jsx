import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/users/logout", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          localStorage.removeItem("token");
          navigate("/user-login");
        });
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status == 401) {
          navigate("/user-login");
        }
      }
    }
  }, [navigate, token]);

  return <></>;
};

export default UserLogout;
