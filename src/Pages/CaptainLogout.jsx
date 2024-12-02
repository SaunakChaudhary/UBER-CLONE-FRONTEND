import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/captains/logout", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          localStorage.removeItem("token");
          navigate("/captains-login");
        });
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status == 401) {
          navigate("/captains-login");
        }
      }
    }
  }, [navigate, token]);

 
  return (
    <div>
      
    </div>
  )
}

export default CaptainLogout
