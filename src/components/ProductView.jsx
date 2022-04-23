import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/shoppingCart/CartItemsSlide'
import Plus from '../Assets/icons/plus.png'
import Minus from '../Assets/icons/minus.png'

// import of Swiper.js Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { checkPropTypes } from "prop-types";




const ProductView = (props) => {
  
  let product = props.product;
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  //State
  const [activeThumb, setActiveThumb] = useState();
  const [size, setSize] = useState( product === undefined ? undefined : product.size[0]);
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState(undefined)
  const [selectedImg, setSelectedImg] = useState(undefined)
  
  // fonction pour caputer l'adresse de l'image active avec la class nommer par swiper js
  const activeImages = () => {
    let activeImages = document.querySelectorAll('.imageSlider');
    var jean;
    activeImages.forEach((item) => {
      if (item.parentNode.className === "swiper-slide swiper-slide-active") {
        jean=item.src
      }
    }) 
    setSelectedImg(jean);
  }

  //Eviter de generer d'erreur dans productViewModal
  if (product === undefined) {product = {
    price: 0,
    name: '',
    img: '',
    size:[],
    color:[]
    }
  }


  useEffect(() => {
    setSize(product.size[0])
    setQuantity(1)
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

  const addToCart = () => {
      dispatch(addItem({
        id: product.id,
        catalogSlug:product.catalogSlug,
        price:product.price,
        img:selectedImg,
        color: color,
        size: size,
        quantity:quantity,
      }))
  }

  const goToCart = () => {
    dispatch(
      addItem({
        id: product.id,
        catalogSlug: product.catalogSlug,
        price: product.price,
        img: selectedImg,
        color: color,
        size: size,
        quantity: quantity,
      })
      );
    navigate('/cart')
  }

  return (
    <div>
      {product ? (
        <>
          {/*The Modal prop is to design the productView differently in modal*/}
          <div className={`${props.Modal ? "" : "backgroundProduct"}`}></div>
          {props.Modal ? null : (
            <img className="backgroundProductImg" src={product.img} />
          )}
          <div className={`productWrapper ${props.Modal ? "modal" : ""}`}>
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
                    {({ isActive }) => (
                      <ImageSlider
                        item={item.img}
                        isActive={isActive}
                        activeImages={activeImages}
                        updateColor={updateColor}
                        color={item.name}
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="shoesInfoItem">
                <h3> US ${product.price}</h3>
                <p>{product.name}</p>
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
                />
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


const ImageSlider = props => {
    if (props.isActive === true) {
      props.activeImages()
      props.updateColor(props.color)
    } 
  return (
    <div className="imageSliderWrapper">
      <img className="imageSlider" src={props.item} />
    </div>
  );
}

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
            <div key={index} className="other_color_img_wrapper">
              <img className="other_color_img" src={item.img} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="size_wrapper">
        {props.product.size.map((item, index) => (
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
          onClick={() => {
            props.addToCart();
          }}
        >
          Ajouter au panier
        </button>
        <button
          onClick={() => {
            props.goToCart();
          }}
        >
          Acheter maintenant
        </button>
      </div>
    </>
  );
}


export default ProductView;
