import React from "react";
import { Carousel } from "antd";
import Contacts from "./Contacts";
import Categories from "./Categories";
import Settings from "./Settings";
import Schedules from "./Schedules";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "../styles/CarouselContainers.css";

const Features = () => {
  return (
    <Carousel
      arrows
      autoplay
      fade
      infinite
      draggable
      dotPosition="top"
      // prevArrow={<LeftOutlined id="custom-prev-arrow" />}
      // nextArrow={<RightOutlined id="custom-next-arrow" />}
      id="CarouselContainer"
    >
      <Contacts />
      <Categories />
      <Settings />
      <Schedules />
    </Carousel>
  );
};

export default Features;
