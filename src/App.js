import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Pages/Home/home";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";
import Library from "./Pages/Library/library";
import Profile from "./Pages/Profile/profile";
import { useEffect } from "react";
import Courses from "./Pages/Courses/courses";

function App() {
  let navigate = useNavigate();

  const token = window.localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/library" element={<Library />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </>
  );
}

export default App;
