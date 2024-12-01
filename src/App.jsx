import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import UserLogin from "./Pages/UserLogin";
import UserSignup from "./Pages/UserSignup";
import CaptainSignup from "./Pages/CaptainSignup";
import CaptainLogin from "./Pages/CaptainLogin";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/captains-login" element={<CaptainLogin />} />
        <Route path="/captains-signup" element={<CaptainSignup />} />
      </Routes>
    </div>
  );
};

export default App;
