import React from "react";
import MenuBar from "../components/MenuBar";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Contacts from "../pages/Contacts";
import Messages from "../pages/Messages";
import Schedules from "../pages/Schedules";
import Settings from "../pages/Settings";
import FooterPage from "../pages/Footer";

const App = () => {
  return (
    <>
      <MenuBar />
      <Home />
      <Messages />
      <Contacts />
      <Categories />
      <Settings />
      <Schedules />
      <FooterPage />
    </>
  );
};

export default App;
