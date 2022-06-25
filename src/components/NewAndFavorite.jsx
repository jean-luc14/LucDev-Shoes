import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import {
  getNewProducts,
  getFavoriteProducts,
} from "../Assets/data/ProductData";
import { db } from "../firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";

const NewAndFavorite = (props) => {
  //const newProducts = getNewProducts();
  //const favoriteProducts = getFavoriteProducts();

  const [newProducts, setNewProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    //Get new and favorite products from firestore
    const getNewAndFavoriteProducts = async () => {
      let productCatalogList = [];
      let allProducts = [];
      let NewArrivals = [];
      let category;
      let lastProductInCategory;

      //get all products and product category list
      const querySnapshotList = await getDocs(collection(db, "productData"));
      querySnapshotList.forEach((doc) => {
        const all = doc.data();
        const docCategory = doc.data().category;
        allProducts.push(all);
        productCatalogList.push(docCategory);
      });
      productCatalogList = [...new Set(productCatalogList)];

      //get last product of each product category
      productCatalogList.forEach((item) => {
        category = allProducts.filter((e) => e.category === item);
        category.sort((a, b) => Number.parseInt(a.id) - Number.parseInt(b.id));
        lastProductInCategory = category.slice(-1)[0];
        NewArrivals.push(lastProductInCategory);
      });
      setNewProducts(NewArrivals);

      //get favorite products
      const favoriteProds = allProducts.filter(
        (item) => item.favorite === "true"
      );
      setFavoriteProducts(favoriteProds);
    };

    getNewAndFavoriteProducts();

    //Full Slider
    const sliderCtn = document.querySelectorAll(
      ".favorite_and_new_shoes_slider .slideshow-container"
    );

    let holding = false;
    let firstClickX;
    let alreadyScrl;
    let velocity;
    let rafID;

    sliderCtn.forEach((Ctn) => {
      let progressWidth;
      let progressClickWidth;
      let progressLeft;
      let progressClickLeft;

      let progressBarClick = Ctn.parentNode.childNodes[1];
      let progressBar = Ctn.parentNode.childNodes[1].childNodes[0];

      let totalWidth = Ctn.childNodes[0].getBoundingClientRect().width;

      progressWidth = (Ctn.getBoundingClientRect().width / totalWidth) * 100;
      progressClickWidth = progressBarClick.getBoundingClientRect().width;
      progressClickLeft = progressBarClick.getBoundingClientRect().left;

      progressBar.style.width = `${progressWidth}%`;

      progressBarClick.addEventListener("click", (e) => {
        holding = false;
        let x = e.clientX - progressClickLeft;
        let newScrollLeft = (x / progressClickWidth) * totalWidth;
        Ctn.scrollLeft = newScrollLeft;

        animateProgressBar();
        stopTransition();
      });

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

        animateProgressBar();
      });

      Ctn.addEventListener("mouseup", () => {
        holding = false;
        startTransition();
      });

      Ctn.addEventListener("mouseleave", () => {
        holding = false;
      });

      //animate progress bar of slider
      const animateProgressBar = () => {
        progressLeft = (Ctn.scrollLeft / totalWidth) * 100;
        progressBar.style.left = `${progressLeft}%`;
      };

      //start transition animation of slider
      const startTransition = () => {
        stopTransition();
        rafID = requestAnimationFrame(decreasingTransition);
      };

      //stop transition animation of slider
      const stopTransition = () => {
        cancelAnimationFrame(rafID);
      };

      //animate slider with a slowing down
      const decreasingTransition = () => {
        Ctn.scrollLeft += velocity;
        animateProgressBar();

        velocity *= 0.95;
        if (Math.abs(velocity) > 0.5) {
          rafID = requestAnimationFrame(decreasingTransition);
        }
      };

      // mobile events
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

        animateProgressBar();
      });
    });
  }, []);

  return (
    <>
      {newProducts && favoriteProducts && (
        <div
          className={`favorite_and_new_shoes_slider ${
            props.bodyHomePage === true ? "body_home_page" : ""
          }`}
        >
          <h2>New Arrivals</h2>
          <section>
            <div className="slideshow-container">
              <div className="slideshow">
                {newProducts.map((e, index) => (
                  <div className="child" key={index}>
                    <ProductCard productProps={e} newAndFavorite={true} />
                  </div>
                ))}
              </div>
            </div>
            <div className="click_slider_bar">
              <div className="slider_bar"></div>
            </div>
          </section>
          <h2>Our Favorites</h2>
          <section>
            <div className="slideshow-container">
              <div className="slideshow">
                {favoriteProducts.map((e, index) => (
                  <div className="child" key={index}>
                    <ProductCard productProps={e} newAndFavorite={true} />
                  </div>
                ))}
              </div>
            </div>
            <div className="click_slider_bar">
              <div className="slider_bar"></div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default NewAndFavorite;
