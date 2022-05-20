import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/shoppingCart/CartItemsSlice'
import Plus from '../Assets/icons/plus.png'
import Minus from '../Assets/icons/minus.png'

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
  //const [selectedImg, setSelectedImg] = useState(undefined)
  
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

  //Eviter de generer d'erreur dans productViewModal au deuxieme affichage du meme produit
  // if (product === undefined) {product = {
  //   price: 0,
  //   name: '',
  //   img: '',
  //   size:[],
  //   color:[]
  //   }
  // }


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
                          getSelectedImages={getSelectedImages}
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


const ImageSlider = props => {
  if (props.isActive === true) {
    props.updateColor(props.color);
  }
  return (
    <div  className="imageSliderWrapper">
      <img  className="imageSlider" src={props.item} />
    </div>
  );
}

// The style of ThumbsSizeQuantityButton is in ThumbsSizeQuantityButton.scss
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
              <img className="other_color_img" src={item.img} alt={item.name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="size_wrapper">
        {props.product === undefined ? null :
          (props.product.size.map((item, index) => (
          <span
            className={`size ${props.size === item ? "active" : ""}`}
            key={index}
            onClick={() => props.updateSize(item)}
          >
            {item}
          </span>)
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
}


export default ProductView;
