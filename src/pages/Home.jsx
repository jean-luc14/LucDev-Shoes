import React from "react";
import Header from "../components/Header";
import BodyHomePage from "../components/BodyHomePage";
import shoesSlideData from "../Assets/data/ShoesSlideData";

const Home = () => {
  return (
    <>
      <Header data={shoesSlideData} />
      <BodyHomePage />
    </>
  );
};

export default Home;
