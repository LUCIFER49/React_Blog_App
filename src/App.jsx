import React from "react";
import TopBar from "./components/TopBar/TopBar";
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Setting from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";

const App = () => {
  return (
    <>
      <TopBar />
      <Login />
    </>
  );
};

export default App;
