import React,{useState} from "react";
import PropTypes from 'prop-types'

// import  Swiper modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from 'swiper';

//import images
import ImgD from '../Shoes_image/Oxford/D.jpg'

const Header = props => {
  
  SwiperCore.use([Pagination, Autoplay]);
  const data = props.data;
  return (
    <header>
      <Swiper
        modules={[Autoplay]}
        pagination={{ dynamicBullets: true }}
        loop={true}
        autoplay={{ delay: 3500 }}
        speed={800}
        className="header"
      >
        {data.map((e, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <Shoes_Slide
                shoesSlideData={props.data}
                e={e}
                className={`${isActive ? "active" : ""}`}
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
    <div className={`hero_slide ${props.className}`}>
      <img className="hero_slide_background_img" src={props.e.img} />
      <div className="hero_slide_item">
        <h1 className="hero_slide_item_title">{props.e.title}</h1>
        <p className="hero_slide_item_info">{props.e.description}</p>
        <div className="hero_slide_item_btn">
          <button type="button">New Shoes</button>
          <button type="button">Best Shoes</button>
        </div>
        {/* the term float is not for because of the use of the float system  */}
        <div className="hero_slide_item_float">
          <img className="hero_slide_item_float_img" src={props.e.imgFloat} />
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  data:PropTypes.array.isRequired
}
    
export default Header;