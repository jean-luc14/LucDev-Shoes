import React from "react";

// import  Swiper modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/pagination/pagination.scss";

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from 'swiper';

//import images
import Pexel from './iconAndImages/Pexel.jpg';
// import Pexel_2 from './iconAndImages/pexel_2.jpg';
// import Pexel_3 from './iconAndImages/pexel_3.jpg';
import ImgD from './Shoes_image/Oxford/D.jpg';
// import ImgB from './Image-de-chaussures/Oxford/B.webp';
// import ImgC from './Image-de-chaussures/Oxford/C.jpg';

//import scss
import './Header.scss';

const Header = () => {
  
  SwiperCore.use([Pagination, Autoplay]);
  const Numbers = [1, 2, 3];
  const Shoes_Slide = (props) => {

    return (
      <div className={`header-slide ${props.className}`}>
        <img className="pexel" src={Pexel} />
        <div className="parent-presentation">
          <div className="presentation1">
            <h1>Man Shoes for all {props.e}</h1>
            <p>
              lorem hjbdfjhjf vsshfnjvsdhvsjvnsp ovssn kvnmlqsk nnifdfnhifhl
              ifjgrvjvjsvjvjv, jjvnjvdjvjlqjqjlqjbivhjlrh fhae oazp por jariqd
              jlqnvjqqjj, ijjijeke hejgjkzskgjebv ueklzorg yrigoenj ibhdrun
            </p>
            <div className="header_btn">
              <button>New Shoes</button>
              <button>Best Shoes</button>
            </div>
          </div>
          {/* <div className="header_img"> */}
            <img className="img" src={ImgD} />
            {/* <div className="shoes_text">
              Lore lorem hjbdfjhjf vsshfnjvsdhvsjvnsp ovssn kvnmlqsk
              nnifdfnhifhl ifjgrvjvjsvjvjv, jjvnjvdjvjlqjqjlqjbivhjlrh fhae oazp
              por jariqd jlqnvjqqjj, ijjijeke hejgjkzskgjebv ueklzorg yrigoenj
              ibhdrun
            </div> */}
          {/* </div> */}
        </div>
      </div>
    );
  }
  

  return (
    <header className="header">
        <Swiper
          modules={[Autoplay]}
          pagination={{ "dynamicBullets": true }}
          loop={true} 
          autoplay={{delay:3500}}
        >
        {
          Numbers.map((e, i) => ( 
            <SwiperSlide key={i}>
              {({isActive}) => (
                <Shoes_Slide e={e} className={`${isActive ? 'active' : ''}`}/>
              )}
            </SwiperSlide>
          ))}
          
        </Swiper> 
    </header>
  )

  
}
export default Header;