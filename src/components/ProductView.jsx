import React, { useState} from "react";
import ImageSliderData from "../Assets/data/ImageSliderData";
import ImgE from "../Shoes_image/Oxford/E.jpg";
import ImgG from "../Shoes_image/Oxford/G.jpg";
import ImgH from "../Shoes_image/Oxford/H.jpg";
import ImgI from "../Shoes_image/Oxford/I.jpg";
import ImgJ from "../Shoes_image/Oxford/J.jpg";

// import of Swiper.js Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ProductView = (props) => {
  
  const [activeThumb, setActiveThumb] = useState();
  let product = props.product;

  if (product === undefined) product = {
    price: 0,
    name: '',
    img:''
    
  }

  return (
    <>
      {product ? (
        <div className="backgroundProduct">
          <img className="backgroundProductImg" src={product.img} />
          <div className="productWrapper">
            <div className="productDetail">
              <Swiper
                loop={true}
                navigation={true}
                spaceBetween={10}
                modules={[Navigation, Thumbs]}
                grabCursor={true}
                thumbs={{ swiper: activeThumb }}
                className="productImageSlider"
              >
                {ImageSliderData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img className="imageSlider" src={item} />
                  </SwiperSlide>
                ))}{" "}
                "";
              </Swiper>
              <div className="shoesDescription">
                <h3>{product.price}</h3>
                <p>{product.name}</p>
                <h4>Etoiles et avis</h4>
                <Swiper
                  onSwiper={setActiveThumb}
                  loop={true}
                  navigation={true}
                  slidesPerView={5}
                  spaceBetween={10}
                  modules={[Navigation, Thumbs]}
                  className="productImageSliderThumbs"
                >
                  {ImageSliderData.map((item, index) => (
                    <SwiperSlide>
                      <div
                        key={index}
                        className="productImageSliderThumbsWrapper"
                      >
                        <img className="similarImg" src={item} />
                      </div>
                    </SwiperSlide>
                  ))}{" "}
                  "";
                </Swiper>
                <div className="buy_and_add_product_button">
                  <button>Ajouter au panier</button>
                  <button>Acheter maintenant</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1> This Component does not Exist </h1>
      )}
    </>
  );
};

export default ProductView;
