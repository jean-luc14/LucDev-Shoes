import React from 'react';
import Header from '../components/Header';
import '../scss/components/Home.scss';
import BodyHomePage from '../components/BodyHomePage';
import shoesSlideData from "../Assets/data/ShoesSlideData";

const Home = () => {

  return (
    <>
      <Header data={shoesSlideData} />
      <div className="main-content">
        <br />
        <h1>Bienvenue sur notre App</h1>
        <br />
        <h2>Oxford</h2>
        <BodyHomePage/>
      </div>
    </>
  );
}

export default Home;