import React,{useState} from "react";
import PropTypes from 'prop-types'

// import  Swiper modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from 'swiper';

//import images
import ImgD from '../Shoes_image/Oxford/D.jpg';

//import scss
import '../scss/components/Header.scss';

const Header = props => {
  
  SwiperCore.use([Pagination, Autoplay]);
  const data = props.data;
  return (
    <header className="header">
      <Swiper
        modules={[Autoplay]}
        pagination={{ dynamicBullets: true }}
        loop={true}
        autoplay={{ delay: 3500 }}
        speed={800}
      >
        {data.map((e, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <Shoes_Slide
                shoesSlideData={props.data}
                e={e}
                //className={`${isActive ? "active" : ""}`}
                foo={() => { if (isActive) console.log('jean') }}
                consol={()=>{console.log(isActive)}}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );

  
}
const Shoes_Slide = props => {
  return (
    <div onClick={props.consol} className={`header-slide ${props.className}`}>
      <img className="pexel" src={props.e.img} />
      <div className="parent-presentation">
        <div className="presentation1">
          <h1>{props.e.title}</h1>
          <p>{props.e.description}</p>
          <div className="header_btn">
            <button onClick={props.consol}>New Shoes</button>
            <button onClick={props.foo}>Best Shoes</button>
          </div>
        </div>
        <img className="img" src={props.e.imgFloat} />
      </div>
    </div>
  );
}

Header.propTypes = {
  data:PropTypes.array.isRequired
}
    
export default Header;