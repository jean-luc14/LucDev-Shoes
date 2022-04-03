import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/shoppingCart/CartItemsSlide'
import "../Assets/fontawesome-icons/scss/fontawesome.scss";

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
          {/* sizeModal prop is for shrink size to show in modal */}
          <div
            className={`backgroundProduct ${
              product === undefined ? "sizeModal" : ""
            }`}
          >
            <img className="backgroundProductImg" src={product.img} />
            <div className="productWrapper">
              <div className="productInfo">
                <Swiper
                  navigation={true}
                  spaceBetween={10}
                  modules={[Navigation, Thumbs]}
                  grabCursor={true}
                  thumbs={{ swiper: activeThumb }}
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
                  ))}{" "}
                  "";
                </Swiper>
                <div className="shoesInfoItem">
                  <h3> US ${product.price}</h3>
                  <p>{product.name}</p>
                  <div>color:{color}</div>
                  <Swiper
                    onSwiper={setActiveThumb}
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
                          <img className="similarImg" src={item.img} />
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
                        onClick={() => updateSize(item)}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="product_quantity">
                    <div className="product_quantity_btn">
                      <i
                        className="fa fa-minus"
                        onClick={() => updateQuantity("minus")}
                      ></i>
                    </div>
                    <div className="product_quantity_item">{quantity}</div>
                    <div className="product_quantity_btn">
                      <i
                        className="fa fa-plus "
                        onClick={() => updateQuantity("plus")}
                      ></i>
                    </div>
                  </div>
                  <div className="buy_and_add_product_button">
                    <button
                      onClick={() => {
                        addToCart();
                      }}
                    >
                      Ajouter au panier
                    </button>
                    <button
                      onClick={() => {
                        goToCart();
                      }}
                    >
                      Acheter maintenant
                    </button>
                  </div>
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


const ImageSlider = props => {
    if (props.isActive === true) {
      props.activeImages()
      props.updateColor(props.color)
    } 
    return <img className="imageSlider" src={props.item} />
}


export default ProductView;
