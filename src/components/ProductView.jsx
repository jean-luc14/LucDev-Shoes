import React, { useState} from "react";
import { useDispatch } from 'react-redux'
import {addItem} from '../redux/shoppingCart/CartItemsSlide'

// import of Swiper.js Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { checkPropTypes } from "prop-types";

const ProductView = (props) => {
  
  let product = props.product;

  const [activeThumb, setActiveThumb] = useState();
  const [size, setSize] = useState( product === undefined ? undefined : product.size[0]);
  const [color, setColor] = useState(undefined)
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()


  if (product === undefined) {product = {
    price: 0,
    name: '',
    img: '',
    size:[],
    color:[]
    }
  }
  
  const updateQuantity = (type) => {
    if (type === 'plus') {
      setQuantity(quantity + 1)
    } else {
      setQuantity(quantity > 1 ? quantity - 1 : 1)
    }
    console.log(product.size[0])
  }

  // const addToCart = () => {
  //   if (check()) {
  //     dispatch(addItem({
  //       slug: product.slug,
  //       color: color,
  //       size: size,
  //       quantity:quantity,
  //       price:product.price,
  //     }))
  //   }
  // }

  return (
    <>
      {product ? (
        <>
          {/* sizeModal prop is for shrink size to show in modal*/}
          <div
            className={`backgroundProduct ${
              product === undefined ? "sizeModal" : ""
            }`}
          >
            <img className="backgroundProductImg" src={product.img} />
            <div className="productWrapper">
              <div className="productInfo">
                <Swiper
                  loop={true}
                  navigation={true}
                  spaceBetween={10}
                  modules={[Navigation, Thumbs]}
                  grabCursor={true}
                  thumbs={{ swiper: activeThumb }}
                  className="productImageSlider"
                >
                  {product.color.map((item, index) => (
                    <SwiperSlide key={index}>
                      <img className="imageSlider" src={item} />
                    </SwiperSlide>
                  ))}{" "}
                  "";
                </Swiper>
                <div className="shoesInfoItem">
                  <h3>{product.price}</h3>
                  <p>{product.name}</p>
                  <Swiper
                    onSwiper={setActiveThumb}
                    loop={true}
                    navigation={true}
                    slidesPerView={5}
                    spaceBetween={10}
                    modules={[Navigation, Thumbs]}
                    className="productImageSliderThumbs"
                  >
                    {product.color.map((item, index) => (
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
                  <div>
                    {product.size.map((item, index) => (
                      <span
                        className={`${size === item ? "active" : ""}`}
                        key={index}
                        onClick={() => setSize(item)}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="product_quantity">
                    <div className="product_quantity_btn">
                      <i
                        className="bx bx-minus"
                        onClick={() => updateQuantity("minus")}
                      >a</i>
                    </div>
                    <div className="product_quantity_item">{quantity}</div>
                    <div className="product_quantity_btn">
                      <i
                        className="bx bx-plus "
                        onClick={() => updateQuantity("plus")}
                      >a</i>
                    </div>
                  </div>
                  <div className="buy_and_add_product_button">
                    <button>Ajouter au panier</button>
                    <button>Acheter maintenant</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1> This Component does not Exist </h1>
      )}
    </>
  );
};

export default ProductView;
