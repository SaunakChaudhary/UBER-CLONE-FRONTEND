import { useState } from "react";
import { NavLink } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
    });

    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex flex-col h-screen pt-8 justify-between">
      <div>
        <img
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
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
              Join a fleet{" "}
              <NavLink to="/captains-signup" className="text-blue-500 ml-1">
                Register as a Captain{" "}
              </NavLink>
            </p>
          </form>
        </div>
      </div>
      <div className="p-6 mb-6">
        <NavLink
          to="/user-login"
          className="bg-orange-700 text-white flex justify-center rounded text-xl p-2"
        >
          Sign in as User
        </NavLink>
      </div>
    </div>
  );
};

export default CaptainLogin;
