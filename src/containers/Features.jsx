import React from "react";
import { Carousel, Layout } from "antd";
import Contacts from "./Contacts";
import Categories from "./Categories";
import Messages from "./Messages";
import Settings from "./Settings";
import Schedules from "./Schedules";
const Features = () => {
  const { Content } = Layout;

  return (
    <div id="CarouselCotainer">
      <Carousel
        autoplay={true}
        fade={true}
        infinite={true}
        draggable={true}
        easing="cubic-bezier(0.25, 0.1, 0.25, 1)"
      >
        <Contacts />
        <Categories />
        <Settings />
        <Schedules />
      </Carousel>
    </div>
  );
};

export default Features;
