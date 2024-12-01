import { useState } from "react";
import { NavLink } from "react-router-dom";

const UserSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    fullName: {
      firstName: "",
      lastName: "",
    },
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      fulllName: {
        firstName: firstname,
        lastName: lastname,
      },
      email: email,
      password: password,
    });
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
          <form onSubmit={() => handleSubmit(e)}>
            <div className="mb-5">
              <h2 className="text-lg font-semibold">What&apos;s Your Name </h2>
              <div className="w-full flex gap-3">
                <input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  className="text-lg p-2 bg-gray-200 rounded w-1/2 placeholder:font-base"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  className="text-lg p-2 bg-gray-200 rounded w-1/2 placeholder:font-base"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-5">
              <h2 className="text-lg font-semibold">What&apos;s Your Email</h2>
              <input
                type="email"
                name="email"
                placeholder="email@example.com"
                className="text-lg p-2 bg-gray-200 rounded w-full placeholder:font-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <h2 className="text-lg font-semibold">Enter Password </h2>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="text-lg p-2 bg-gray-200 rounded w-full placeholder:font-base"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <button
                type="submit"
                className="w-full bg-black text-white flex justify-center rounded text-xl p-2"
              >
                Signup
              </button>
            </div>
            <p className="flex justify-center font-semibold">
              Already have an account ?{" "}
              <NavLink to="/user-login" className="text-blue-500 ml-1">
                Login here
              </NavLink>
            </p>
          </form>
        </div>
      </div>
      <div className="p-6 mb-6">
        <p className="text-xs leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply.</span>
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
