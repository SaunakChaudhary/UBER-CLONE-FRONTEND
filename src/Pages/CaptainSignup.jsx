import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../Context/CaptainContext";

const CaptainSignup = () => {
  const navigate = useNavigate();
  const { setCaptain } = useContext(CaptainDataContext);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = {
      fullName: {
        firstName: firstname,
        lastName: lastname,
      },
      email: email,
      password: password,
      vehicles: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/captains/register",
        captainData
      );
      const data = response.data;
      if (response.status === 201) {
        setCaptain(data.user);
        localStorage.setItem("token", data.token);
        navigate("/captains-home");
      }
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        toast.error(data.message || data.errors[0].msg);
      }
    }
    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
    setVehicleCapacity("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleType("");
  };
  return (
    <div className="flex flex-col h-screen pt-8 justify-between">
      <div>
        <img
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="logo"
          className="w-20 ml-9"
        />
        <div className="p-6">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-5">
              <h2 className="text-lg font-semibold">
                What&apos;s Our Captain&apos;s Name{" "}
              </h2>
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
              <h2 className="text-lg font-semibold">Vehicle Information</h2>
              <div className="w-full flex gap-3 mb-3">
                <input
                  type="text"
                  name="vehicleColor"
                  placeholder="Vehicle Color"
                  className="text-lg p-2 bg-gray-200 rounded w-1/2 placeholder:font-base"
                  value={vehicleColor}
                  onChange={(e) => setVehicleColor(e.target.value)}
                />
                <input
                  type="text"
                  name="vehiclePlate"
                  placeholder="Vehicle Plate"
                  className="text-lg p-2 bg-gray-200 rounded w-1/2 placeholder:font-base"
                  value={vehiclePlate}
                  onChange={(e) => setVehiclePlate(e.target.value)}
                />
              </div>
              <div className="w-full flex gap-3">
                <input
                  type="text"
                  name="vehicleCapacity"
                  placeholder="Vehicle Capacity"
                  className="text-lg p-2 bg-gray-200 rounded w-1/2 placeholder:font-base"
                  value={vehicleCapacity}
                  onChange={(e) => setVehicleCapacity(e.target.value)}
                />
                <select
                  name="vehicleType"
                  className="text-lg p-2 bg-gray-200 rounded w-1/2 placeholder:font-base"
                  onChange={(e) => {
                    setVehicleType(e.target.value);
                  }}
                >
                  <option value="">-- Type --</option>
                  <option value="car">Car</option>
                  <option value="motorcycle">MotorCycle</option>
                  <option value="auto">AutoRickshaw</option>
                </select>
              </div>
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
              <NavLink to="/captains-login" className="text-blue-500 ml-1">
                Login here
              </NavLink>
            </p>
          </form>
        </div>
      </div>
      <div className="px-6 mb-6">
        <p className="text-xs leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply.</span>
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
