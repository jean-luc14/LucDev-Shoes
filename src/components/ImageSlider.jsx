import React, { useEffect } from "react";

// The style of ImageSlider Component is in ProductView.scss
const ImageSlider = (props) => {
  if (props.isActive === true) {
    props.updateColor(props.color);
  }
  useEffect(() => {
    // get swiper in modal or not
    let swiper;
    if (props.modal) {
      swiper = document.querySelector(".productWrapper.modal .swiper");
    } else {
      swiper = document.querySelector(".productInfo .swiper");
    }

    let imageSliderWrapper;
    let imageSliderWrapperRect;
    let imageSlider;
    let imageSliderRect;
    let lens;
    let lensRect;
    let zoomImageResult;
    let zoomImageResultRect;

    // zoom image in active slide
    swiper.addEventListener("mousemove", (e) => {
      /*Get html elements separately for that even on product page the related products 
      can get show html elements in productViewModal */
      if (props.modal) {
        imageSliderWrapper = document.querySelector(
          ".productWrapper.modal .swiper-slide.swiper-slide-active .imageSliderWrapper"
        );
        imageSlider = document.querySelector(
          ".productWrapper.modal .swiper-slide.swiper-slide-active .imageSlider"
        );
        lens = document.querySelector(
          ".productWrapper.modal .swiper-slide.swiper-slide-active .lens"
        );
        zoomImageResult = document.querySelector(
          ".productWrapper.modal .zoom_image_result"
        );
      } else {
        imageSliderWrapper = document.querySelector(
          ".swiper-slide.swiper-slide-active .imageSliderWrapper"
        );
        imageSlider = document.querySelector(
          ".swiper-slide.swiper-slide-active .imageSlider"
        );
        lens = document.querySelector(
          ".swiper-slide.swiper-slide-active .lens"
        );
        zoomImageResult = document.querySelector(
          ".productWrapper .zoom_image_result"
        );
      }

      //Add background image and active class to result of image zoom and lens
      zoomImageResult.classList.add("active");
      lens.classList.add("active");
      zoomImageResult.style.backgroundImage = `url(${imageSlider.src})`;

      imageSliderWrapperRect = imageSliderWrapper.getBoundingClientRect();
      imageSliderRect = imageSlider.getBoundingClientRect();
      lensRect = lens.getBoundingClientRect();
      zoomImageResultRect = zoomImageResult.getBoundingClientRect();
      zoomImage(e);
    });

    //zoom image
    const zoomImage = (e) => {
      let { x, y } = getMousePos(e);

      lens.style.left = x + "px";
      lens.style.top = y + "px";

      let fx = zoomImageResultRect.width / lensRect.width;
      let fy = zoomImageResultRect.height / lensRect.height;

      zoomImageResult.style.backgroundSize = `${imageSliderRect.width * fx}px
       ${imageSliderRect.height * fy}px`;
      zoomImageResult.style.backgroundPosition = `-${x * fx}px -${y * fy}px `;
    };

    // get position of mouse on swiper
    const getMousePos = (e) => {
      let x = e.clientX - imageSliderWrapperRect.left - lensRect.width / 2;
      let y = e.clientY - imageSliderWrapperRect.top - lensRect.height / 2;
      let minX = 0;
      let minY = 0;
      let maxX = imageSliderWrapperRect.width - lensRect.width;
      let maxY = imageSliderWrapperRect.height - lensRect.height;
      if (x <= minX) {
        x = minX;
      } else if (x >= maxX) {
        x = maxX;
      }
      if (y <= minY) {
        y = minY;
      } else if (y >= maxY) {
        y = maxY;
      }
      return { x, y };
    };

    //Remove active class from result of image zoom en lens if mouse leave
    swiper.addEventListener("mouseleave", () => {
      zoomImageResult.classList.remove("active");
      lens.classList.remove("active");
    });
  }, [props.modal]);

  return (
    <div className="imageSliderWrapper ">
      <img className="imageSlider" src={props.item} />
      <div className="lens"></div>
    </div>
  );
};

export default ImageSlider;
