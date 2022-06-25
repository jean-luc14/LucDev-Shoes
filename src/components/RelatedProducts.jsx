import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { getProductByCatalogAndId } from "../Assets/data/ProductData";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const RelatedProducts = ({ product }) => {
  const [relatedProductsState, setRelatedProductsState] = useState(undefined);

  useEffect(() => {
    if (product) {
      const relatedProductFunc = async () => {
        let productsOfCategory = [];
        let relatedProductIds = [];

        //get from firestore the products of the same category as that of  current product on this product page
        const q = query(
          collection(db, "productData"),
          where("category", "==", product.category)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          productsOfCategory.push(doc.data());
        });

        // generate a random numbers between 1 and productsOfCategory.length without the id of current product on this product page
        for (
          let i = 0;
          relatedProductIds.length < 4 &&
          relatedProductIds.length < productsOfCategory.length - 1;
          i++
        ) {
          let idResult = Math.round(Math.random() * productsOfCategory.length);
          if (idResult === 0 || idResult == product.id) {
          } else if (relatedProductIds.includes(idResult)) {
            relatedProductIds.pop();
          } else {
            relatedProductIds.push(idResult);
          }
        }

        //search related product and put them in state
        const relatedProductsResult = productsOfCategory.filter((item) =>
          relatedProductIds.includes(Number.parseInt(item.id))
        );
        setRelatedProductsState(relatedProductsResult);
      };

      relatedProductFunc();
    }
    //Add active class to title of related product if he is visible in viewport
    const animateRelatedTitle = () => {
      console.log(product);
      if (product === undefined) return;
      //get HtmlElement title container of related product
      const relatedProducts = document.querySelector(".related_products");

      //get HtmlElement title (h1)
      const title = document.querySelector(".related_products h1");

      const { scrollTop, clientHeight } = document.documentElement;
      const TopRelatedProductsToTopViewport =
        relatedProducts.getBoundingClientRect().top;
      if (
        scrollTop >
        (scrollTop + TopRelatedProductsToTopViewport).toFixed() -
          clientHeight * 0.9
      ) {
        title.classList.add("active");
      }
    };

    window.addEventListener("scroll", animateRelatedTitle());
    return () => {
      window.removeEventListener("scroll", animateRelatedTitle());
    };
  }, [product]);
  return (
    <div className="related_products">
      <div className="related_products_title">
        <h1>Related Products</h1>
      </div>
      <div className="related_products_child">
        {relatedProductsState &&
          relatedProductsState.map((item, index) => (
            <div className="related_products__child_item" key={index}>
              <ProductCard productProps={item} />
            </div>
          ))}
      </div>
    </div>
  );
};
export default RelatedProducts;
