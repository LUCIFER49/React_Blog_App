import React from "react";
import TopBar from "./components/TopBar/TopBar";
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Setting from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

const App = () => {
  return (
    <>
      <TopBar />
      <Register />
    </>
  );
};

export default App;
