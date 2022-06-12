import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/shoppingCart/CartItemsSlice'
import ImageSlider from "./ImageSlider";
import ThumbsSizeQuantityButton from "./ThumbsSizeQuantityButton";
import { remove } from "../redux/product/ProductSlice";

// import of Swiper.js Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css/navigation";
import "swiper/css/thumbs";


const ProductView = (props) => {
  
  let product = props.product;
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  //State
  const [activeThumb, setActiveThumb] = useState();
  const [size, setSize] = useState( product === undefined ? undefined : product.size[0]);
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState(
    product === undefined ? undefined : product.color[0].name
  );
  
  // get the link of image which is in active slide of swiper js
  const getSelectedImages = () => {
    let Images = document.querySelectorAll('.imageSlider');
    let  imageSelected;
    Images.forEach((item) => {
      if (
        item.parentNode.parentNode.className ===
        "swiper-slide swiper-slide-active"
      ) {
        imageSelected = item.src;
      }
    }) 
    return imageSelected;
  }

  // update product property function
  const updateQuantity = (type) => {
    if (type === 'plus') {
      setQuantity(quantity + 1)
    } else {
      setQuantity(quantity > 1 ? quantity - 1 : 1)
    }
  } 
  const updateSize = (item) => {
    setSize(item)
  }

  //Add Product to cart
  const addToCart = () => {
    let selectedImg = getSelectedImages();
      dispatch(addItem({
        id: product.id,
        catalogSlug:product.catalogSlug,
        name: product.name,
        price:product.price,
        img:selectedImg,
        color: color,
        size: size,
        quantity:quantity,
      }))
  }

  //Add Product to cart and go to cart
  const goToCart = () => {
    let selectedImg = getSelectedImages();
    dispatch(
      addItem({
        id: product.id,
        catalogSlug: product.catalogSlug,
        name: product.name,
        price: product.price,
        img: selectedImg,
        color: color,
        size: size,
        quantity: quantity,
      })
    );
    navigate('/cart')
  }

  //put color of active slide in color state
  const putColorInState = () => {
    let activeImage;
    if (props.Modal) {
      activeImage = document.querySelector(
        ".productWrapper.modal .swiper-slide.swiper-slide-active .imageSlider"
      );
    } else {
      activeImage = document.querySelector(
       ".swiper-slide.swiper-slide-active .imageSlider"
     );
    }
    setColor(activeImage.getAttribute("color"));
  }

  // go to the page of current category
  const goToCategoryPage = () => {
    navigate(`/catalog=${product.catalogSlug}`);

    if (props.Modal) {
      dispatch(remove());
    }
  }

  useEffect(() => {
    let productWrapper;
    let productInfo;
    let progressBar;
    let progressBarClick;

    let totalHeight;
    let productWrapperHeight; 

    //get html element if current product doesn't undefined
    const checkCurrentProduct = () => {
      if (product) {
        if (props.Modal) {
          productWrapper = document.querySelector(".productWrapper.modal");
          productInfo = document.querySelector(
            ".productWrapper.modal .productInfo"
          );
          progressBar = document.querySelector(
            ".productWrapper.modal .scroll_bar"
          );
          progressBarClick = document.querySelector(
            ".productWrapper.modal .click_scroll_bar"
          );
        } else {
          productWrapper = document.querySelector(".productWrapper");
          productInfo = document.querySelector(".productInfo");
          progressBar = document.querySelector(".productWrapper .scroll_bar");
          progressBarClick = document.querySelector(
            ".productWrapper .click_scroll_bar"
          );
        }

        totalHeight = productInfo.scrollHeight; 
        productWrapperHeight = productWrapper.getBoundingClientRect().height
          
        if (productWrapperHeight >= totalHeight) {
          progressBarClick.style.height = 0;
          progressBar.style.height = 0;
          return false;
        } else {
          progressBarClick.style.height = productWrapperHeight;
           return true;
        }
      }
    }; 

    //set height of progress bar
    const setProgressBarHeight = () => {
      if (checkCurrentProduct()) {
        let progressHeight = (productWrapperHeight / totalHeight) * 100;
        progressBar.style.height = `${progressHeight}%`;
      }
    };

    //set and animate progress bar
    const progressBarFunc = () => { 
      if (checkCurrentProduct()) {
        productInfo.addEventListener("scroll", () => { 
          setProgressBarHeight();
          let progressTop = (productInfo.scrollTop / totalHeight) * 100;
          progressBar.style.top = `${progressTop}%`;
        });
      }
    }; 
 
    setProgressBarHeight();
    progressBarFunc();


    setSize(product === undefined ? undefined : product.size[0]);
    setColor(product === undefined ? undefined : product.color[0].name);
    setQuantity(1);
    getSelectedImages();
  }, [product, props.Modal]);

  return (
    <div>
      {product ? (
        <>
          <div className="backgroundProduct">
            {props.Modal || product === undefined ? null : (
              <div className="backgroundProductImgWrapper">
                <img src={product.color[0].img} alt={product.color[0].name} />
              </div>
            )}
            <div className={`productWrapper ${props.Modal ? "modal" : ""}`}>
              {/* close icon to close modal */}
              {props.Modal ? (
                <span className="close" onClick={() => dispatch(remove())}>
                  {" "}
                  &times;
                </span>
              ) : null}
              {/* progress bar which is in tablet and mobile width on pc (if user narrow the window width of him pc)*/}
              <div className="click_scroll_bar">
                <div className="scroll_bar"></div>
              </div>
              <div className="zoom_image_result"></div>
              <div className="productInfo">
                {/* Swipe which post a current product */}
                <Swiper
                  navigation={true}
                  spaceBetween={10}
                  modules={[Navigation, Thumbs]}
                  grabCursor={true}
                  thumbs={{ swiper: activeThumb }}
                  speed={800}
                  className="productImageSlider"
                >
                  {product.color.map((item, index) => (
                    <SwiperSlide key={index}>
                      <ImageSlider
                        item={item.img}
                        getSelectedImages={getSelectedImages}
                        putColorInState={putColorInState}
                        color={item.name}
                        modal={props.Modal}
                        name={product.name}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="shoesInfoItem">
                  <h3> US ${product.price}</h3>
                  <p>{product.name}</p>
                  <div className="category">
                    Category :{" "}
                    <span onClick={goToCategoryPage}>
                      {product.catalogSlug}
                    </span>
                  </div>
                  <div>
                    Color : <span onClick={goToCategoryPage}>{color}</span>
                  </div>
                </div>
                <div className="thumbsSizeQuantityButton">
                  <ThumbsSizeQuantityButton
                    setActiveThumb={setActiveThumb}
                    product={product}
                    updateSize={updateSize}
                    updateQuantity={updateQuantity}
                    addToCart={addToCart}
                    goToCart={goToCart}
                    size={size}
                    color={color}
                    quantity={quantity}
                    putColorInState={putColorInState}
                    modal={props.Modal}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1> This Component does not Exist </h1>
      )}
    </div>
  );
};

export default ProductView;
