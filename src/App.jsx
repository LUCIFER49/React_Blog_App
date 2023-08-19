import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

const App = () => {

  const user = false;

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home/> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register/>} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
};

export default App;
