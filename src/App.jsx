import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing Page/LandingPage";
import UpgradeProfile from "./pages/Upgrade Profile/UpgradeProfile";
import Dashboard from "./pages/Home Page/Dashboard";
import InterviewPage from "./pages/Interview Page/InterviewPage";
import ReportPage from "./pages/Report Page/ReportPage";
import Navbar from "./components/Navigation/Navbar";
import JobCategory from "./pages/Category Page/JobCategory";
import RegisterLogin from "./pages/Login Page/RegisterLogin";
import Login from "./pages/Login Page/Login";
import History from "./pages/History Page/History";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import store from "./store/store.js";
import { loadUser } from "./actions/userActions.js";

function App() {
  const isAuth = useSelector((state) => state.isAuth);
  useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <>
      <Navbar isAuthUser={isAuth} />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Dashboard />} />
        <Route exact path="/upgradeprofile" element={<UpgradeProfile />} />
        <Route exact path="/interview" element={<InterviewPage />} />
        <Route exact path="/category" element={<JobCategory />} />
        <Route exact path="/report" element={<ReportPage />} />
        <Route exact path="/register" element={<RegisterLogin />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/history" element={<History />} />
      </Routes>
    </>
  );
}

export default App;
