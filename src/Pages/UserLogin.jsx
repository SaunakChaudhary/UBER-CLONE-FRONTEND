import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../Context/UserContext";
import toast from "react-hot-toast";

const UserLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserDataContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };

    try {
      const response = await axios.post(
        "http://localhost:5000/users/login",
        userData
      );

      const data = response.data;

      if (response.status === 201) {
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/home");
      }
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        toast.error(data.message || data.errors[0].msg);
      }
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col h-screen pt-8 justify-between">
      <div>
        <img
          src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
          alt="logo"
          className="w-20 ml-9"
        />
        <div className="mt-5 p-6">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-5">
              <h2 className="text-lg font-semibold">What&apos;s Your Email </h2>
              <input
                type="email"
                name="email"
                placeholder="email@example.com"
                className="text-lg p-2 bg-gray-200 rounded w-full placeholder:font-base"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="mb-5">
              <h2 className="text-lg font-semibold">Enter Password </h2>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="text-lg p-2 bg-gray-200 rounded w-full placeholder:font-base"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="mb-5">
              <button
                type="submit"
                className="w-full bg-black text-white flex justify-center rounded text-xl p-2"
              >
                Login
              </button>
            </div>
            <p className="flex justify-center font-semibold">
              New here?{" "}
              <NavLink to="/user-signup" className="text-blue-500 ml-1">
                Create New Account{" "}
              </NavLink>
            </p>
          </form>
        </div>
      </div>
      <div className="p-6 mb-6">
        <NavLink
          to="/captains-login"
          className="bg-green-700 text-white flex justify-center rounded text-xl p-2"
        >
          Sign in as Captain
        </NavLink>
      </div>
    </div>
  );
};

export default UserLogin;
