import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/shoppingCart/CartItemsSlice'
import ImageSlider from "./ImageSlider";
import ThumbsSizeQuantityButton from "./ThumbsSizeQuantityButton";

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
  const [color, setColor] = useState(undefined)
  
  // fonction pour caputer l'adresse de l'image active avec la class nommer par swiper js
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

  useEffect(() => {
    setSize(product === undefined ? undefined : product.size[0]);
    setQuantity(1)
    getSelectedImages();

    
  },[product])
  

  // update product property function
  const updateQuantity = (type) => {
    if (type === 'plus') {
      setQuantity(quantity + 1)
    } else {
      setQuantity(quantity > 1 ? quantity - 1 : 1)
    }
  }
  const updateColor = (color) => {
    setColor(color)
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

  //put color of active image in state
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

  return (
    <div>
      {product ? (
        <>
          {/*The Modal prop is to design the productView differently in modal*/}
          <div className="backgroundProduct">
            {props.Modal || product === undefined ? null : (
              <div className="backgroundProductImgWrapper">
                <img src={product.color[0].img} alt={product.color[0].name} />
              </div>
            )}
            <div className={`productWrapper ${props.Modal ? "modal" : ""}`}>
              <div className="zoom_image_result"></div>
              <div className="productInfo">
                {/* Swipe which show a current product */}
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
                  <h3 value="luc"> US ${product.price}</h3>
                  <p>{product.name}</p>
                  <div className="category">
                    Category :{" "}
                    <span onClick={() => navigate(`/${product.catalogSlug}`)}>
                      {product.catalogSlug}
                    </span>
                  </div>
                  <div>
                    Color : <span>{color}</span>
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
