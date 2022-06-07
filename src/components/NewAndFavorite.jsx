import React,{useEffect} from 'react'
import ProductCard from "./ProductCard";
import {
  getNewProducts,
  getFavoriteProducts,
} from "../Assets/data/ProductData";

const NewAndFavorite = (props) => {
  // Get New and favorite Products
  const newProducts = getNewProducts();
  const favoriteProducts = getFavoriteProducts();

  useEffect(() => {
    //Full Slider
    const sliderCtn = document.querySelectorAll(".slideshow-container");
    let holding = false;
    let firstClickX;
    let alreadyScrl;
    let velocity;
    let rafID;

    sliderCtn.forEach((Ctn) => {
      Ctn.addEventListener("mousedown", (e) => {
        holding = true;
        firstClickX = e.pageX - Ctn.offsetLeft;
        alreadyScrl = Ctn.scrollLeft;
        stopTransition();
      });

      Ctn.addEventListener("mousemove", (e) => {
        if (!holding) return;
        const x = e.pageX - Ctn.offsetLeft;
        const scrolled = x - firstClickX;
        const prevScrollLeft = Ctn.scrollLeft;
        Ctn.scrollLeft = alreadyScrl - scrolled;
        velocity = Ctn.scrollLeft - prevScrollLeft;
      });

      Ctn.addEventListener("mouseup", () => {
        holding = false;
        startTransition();
      });

      Ctn.addEventListener("mouseleave", () => {
        holding = false;
      });

      const startTransition = () => {
        stopTransition();
        rafID = requestAnimationFrame(decreasingTransition);
      };

      const stopTransition = () => {
        cancelAnimationFrame(rafID);
      };

      const decreasingTransition = () => {
        Ctn.scrollLeft += velocity;
        velocity *= 0.95;
        if (Math.abs(velocity) > 0.5) {
          rafID = requestAnimationFrame(decreasingTransition);
        }
      };

      Ctn.addEventListener("touchstart", (e) => {
        holding = true;
        firstClickX = e.targetTouches[0].pageX - Ctn.offsetLeft;
        alreadyScrl = Ctn.scrollLeft;
        stopTransition();
      });

      Ctn.addEventListener("touchend", () => {
        holding = false;
        startTransition();
      });

      Ctn.addEventListener("touchmove", (e) => {
        if (!holding) return;
        const x = e.targetTouches[0].pageX - Ctn.offsetLeft;
        const scrolled = (x - firstClickX) * 1.5;
        const prevScrollLeft = Ctn.scrollLeft;
        Ctn.scrollLeft = alreadyScrl - scrolled;
        velocity = Ctn.scrollLeft - prevScrollLeft;
      });
    });
  }, []);

  return (
    <div
      className={`favorite_and_new_shoes_slider ${
        props.bodyHomePage === true ? "body_home_page" : ""
      }`}
    >
      <h2>New Arrivals</h2>
      <section className="slideshow-container">
        <div className="slideshow">
          {newProducts.map((e, index) => (
            <div className="child" key={index}>
              <ProductCard productProps={e} newAndFavorite={true} />
            </div>
          ))}
        </div>
      </section>
      <h2>Our Favorites</h2>
      <section className="slideshow-container">
        <div className="slideshow">
          {favoriteProducts.map((e, index) => (
            <div className="child" key={index}>
              <ProductCard productProps={e} newAndFavorite={true} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default NewAndFavorite