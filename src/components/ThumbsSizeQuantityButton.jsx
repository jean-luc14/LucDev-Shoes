import React,{useState,useEffect,useRef} from "react";
import {useNavigate} from 'react-router-dom'
import Plus from "../Assets/icons/plus.png";
import Minus from "../Assets/icons/minus.png";
import { useDispatch,useSelector } from "react-redux";
import { remove } from "../redux/product/ProductSlice";

// import of Swiper.js Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// thumbs of Swiper js
const ThumbsSizeQuantityButton = (props) => {
  const addToCart = useRef(null);

  //get products which are in cart
  const cartItems = useSelector(state => state.cartItems.value)

  //get true if current product is already in cart
  const already = cartItems.some(
      (e) =>
        (e.catalogSlug === props.product.catalogSlug) &
      (e.id === props.product.id)
  )  

  const [productAlreadyInCart, setProductAlreadyInCart] = useState(already);

  //redux
  const navigate = useNavigate();
  const dispatch = useDispatch()

  //Buy product, go to cart and close modal
  const goToCartAndClose = () => {
    props.goToCart();

    if(props.modal){ 
      dispatch(remove()); 
    }
  }

  //Add active class to add to cart button
  const addActiveToBtn = () => {
    addToCart.current.classList.add('active');
  };

  useEffect(() => {
    //get true if current product is already in cart
    const already = cartItems.some(
      (e) =>
        (e.catalogSlug === props.product.catalogSlug) &
        (e.id === props.product.id)
    );

    /*use timer for that thz loading animation of add to cart button finish
      before that the add to cart button is changed to view cart button*/
    const alreadyTimeOutId = setTimeout(() => {
      setProductAlreadyInCart(already);
    }, 3000);

    return () => {
      clearTimeout(alreadyTimeOutId);
    };
  }, [cartItems]);
  
  
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
        <button type="button" onClick={goToCartAndClose}>
          Buy Now
        </button>
        {productAlreadyInCart ? (
          <button type="button" onClick={goToCartAndClose}>
            <div className="view_cart_txt">View Cart</div>
          </button>
        ) : (
          <button
            ref={addToCart}
            type="button"
            onClick={() => {
              props.addToCart();
              addActiveToBtn()
            }}
          >
            <div className="loading">
              <div className="child">
                <div></div>
              </div>
            </div>
            <div className="add_to_cart_txt">Add To Cart</div>
          </button>
        )}
        {props.modal ? (
          <button
            type="button"
            onClick={() => {
              navigate(
                `/catalog=${props.product.catalogSlug}&id=${props.product.id}`
              );
              dispatch(remove());
            }}
          >
            Go To Product Page
          </button>
        ) : null}
      </div>
    </>
  );
};

export default ThumbsSizeQuantityButton;
