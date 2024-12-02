import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { useRef } from "react";
import "remixicon/fonts/remixicon.css";
import LocationSearch from "../Components/LocationSearch";
import VehiclePanel from "../Components/VehiclePanel";
import ConfirmRide from "../Components/ConfirmRide";
import LookingForDriver from "../Components/LookingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmPanel, setConfirmPanel] = useState(false);
  const [lookingForDriverPanel, setLookingForDriverPanel] = useState(false);

  const panelCloseRef = useRef(null);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmPanelRef = useRef(null);
  const lookingForDriverPanelRef = useRef(null);

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: "10px",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: 0,
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );
  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [[vehiclePanel]]
  );
  useGSAP(
    function () {
      if (confirmPanel) {
        gsap.to(confirmPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [[confirmPanel]]
  );
  useGSAP(
    function () {
      if (lookingForDriverPanel) {
        gsap.to(lookingForDriverPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(lookingForDriverPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [[lookingForDriverPanel]]
  );

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen">
        {/* image for temporary use  */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute right-6 top-6 text-2xl opacity-0"
          >
            <i className="ri-arrow-down-wide-line font-bold text-black"></i>
          </h5>
          <h4 className="text-2xl font-bold">Find a trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              onChange={(e) => setPickup(e.target.value)}
              value={pickup}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              onChange={(e) => setDestination(e.target.value)}
              value={destination}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-0 p-0">
          <LocationSearch
            setVehiclePanel={setVehiclePanel}
            setPanelOpen={setPanelOpen}
          />
        </div>
        <div
          ref={vehiclePanelRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
        >
          <VehiclePanel
            setVehiclePanel={setVehiclePanel}
            setConfirmPanel={setConfirmPanel}
          />
        </div>
        <div
          ref={confirmPanelRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
        >
          <ConfirmRide setConfirmPanel={setConfirmPanel} setLookingForDriverPanel={setLookingForDriverPanel} />
        </div>
        <div
          ref={lookingForDriverPanelRef}
          className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
        >
          <LookingForDriver setLookingForDriverPanel={setLookingForDriverPanel}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
