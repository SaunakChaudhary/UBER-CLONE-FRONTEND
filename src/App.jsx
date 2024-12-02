import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import UserLogin from "./Pages/UserLogin";
import UserSignup from "./Pages/UserSignup";
import CaptainSignup from "./Pages/CaptainSignup";
import CaptainLogin from "./Pages/CaptainLogin";
import Start from "./Pages/Start";
import UserProtectedRoute from "./Pages/UserProtectedRoute";
import CaptainHome from "./Pages/CaptainHome";
import CaptainProtectedRoute from "./Pages/CaptainProtectedRoute";
import UserLogout from "./Pages/UserLogout";
import CaptainLogout from "./Pages/CaptainLogout";
import Riding from "./Pages/Riding";
import CaptainRiding from "./Pages/CaptainRiding";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="/home"
          element={
            <UserProtectedRoute>
              <Home />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/riding"
          element={
            <UserProtectedRoute>
              <Riding />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/captains-home"
          element={
            <CaptainProtectedRoute>
              <CaptainHome />
            </CaptainProtectedRoute>
          }
        />{" "}
        <Route
          path="/captains-riding"
          element={
            <CaptainProtectedRoute>
              <CaptainRiding />
            </CaptainProtectedRoute>
          }
        />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/captains-login" element={<CaptainLogin />} />
        <Route path="/captains-signup" element={<CaptainSignup />} />
        <Route path="/user-logout" element={<UserLogout />} />
        <Route path="/captains-logout" element={<CaptainLogout />} />
      </Routes>
    </div>
  );
};

export default App;
