import React from "react";
import Plus from "../Assets/icons/plus.png";
import Minus from "../Assets/icons/minus.png";

// import of Swiper.js Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// thumbs of Swiper js
const ThumbsSizeQuantityButton = (props) => {
  return (
    <>
      <Swiper
        onSwiper={props.setActiveThumb}
        slidesPerView={5}
        spaceBetween={1}
        modules={[Navigation, Thumbs]}
        className="productImageSliderThumbs"
      >
        {props.product.color.map((item, index) => (
          <SwiperSlide>
            <div
              key={index}
              className="other_color_img_wrapper"
              onClick={props.putColorInState}
            >
              <img className="other_color_img" src={item.img} alt={item.name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="size_wrapper">
        {props.product === undefined
          ? null
          : props.product.size.map((item, index) => (
              <span
                className={`size ${props.size === item ? "active" : ""}`}
                key={index}
                onClick={() => props.updateSize(item)}
              >
                {item}
              </span>
            ))}
      </div>
      <div className="product_quantity">
        <div className="product_quantity_btn">
          <img src={Minus} onClick={() => props.updateQuantity("minus")} />
        </div>
        <div className="product_quantity_item">{props.quantity}</div>
        <div className="product_quantity_btn">
          <img src={Plus} onClick={() => props.updateQuantity("plus")} />
        </div>
      </div>
      <div className="buy_and_add_product_button">
        <button
          type="button"
          onClick={() => {
            props.goToCart();
          }}
        >
          Buy Now
        </button>
        <button
          type="button"
          onClick={() => {
            props.addToCart();
          }}
        >
          Add To Card
        </button>
      </div>
    </>
  );
};

export default ThumbsSizeQuantityButton;
