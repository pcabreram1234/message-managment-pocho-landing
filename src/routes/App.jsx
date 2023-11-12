import React from "react";
import MenuBar from "../components/MenuBar";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Contacts from "../pages/Contacts";
import Messages from "../pages/Messages";
import Schedules from "../pages/Schedules";
import Settings from "../pages/Settings";
const App = () => {
  return (
    <div>
      <MenuBar />
      <Home />
      <Categories />
      <Contacts />
      <Messages />
      <Schedules />
      <Settings />
    </div>
  );
};

export default App;
