import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";
import Library from "./Pages/Library/library";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </>
  );
}

export default App;
