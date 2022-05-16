import React,{useState,useEffect} from 'react'
import ProductCard from './ProductCard'
import {getProductByCatalogAndId} from '../Assets/data/ProductData'


const RelatedProducts = ({ product }) => {
  
  const [relatedProductsState, setRelatedProductsState] = useState(undefined)
  
  useEffect(() => {
    // Get uncertain numbers between 1 - 8 without id of current product page
    let relatedProductId = [];
    const relatedProductFunc = () => {
      if (product !== undefined) {
      
        for (let i = 0; relatedProductId.length < 4; i++) {
          let id = Math.round(Math.random() * 8);
          if (id === 0 || id == product.id) {

          } else if (
            relatedProductId.includes(`${id}`)
          ) {
            relatedProductId.pop();
          } else {
            relatedProductId.push(`${id}`);
          }
        }
      }

    }
    // search and put related product in state
    const searchRelatedProducts = () => {
      relatedProductFunc();
      let result = [];
      if (product !== undefined) {
        relatedProductId.forEach(e => {
          result.push(getProductByCatalogAndId(product.catalogSlug, e));
        })
        setRelatedProductsState(result);
      }
    }
    searchRelatedProducts();
    //Catch title container
    const relatedProducts = document.querySelector(".related_products");

    //Catch title (h1)
    const title = document.querySelector(".related_products h1");

    //Add active class to title if he is visible in viewport
    window.addEventListener("scroll", () => {
      const { scrollTop, clientHeight } = document.documentElement;
      const TopRelatedProductsToTopViewport =
        relatedProducts.getBoundingClientRect().top;
      if (
        scrollTop >
        (scrollTop + TopRelatedProductsToTopViewport).toFixed() - clientHeight * 0.9
      ) {
        title.classList.add("active");
      }
    })

  }, [product]);
  return (
    <div className="related_products">
      <div className="related_products_title">
        <h1>Related Products</h1>
      </div>
      <div className="related_products_child">
        {relatedProductsState === undefined
          ? null
          : relatedProductsState.map((item, index) => (
            <div className="related_products__child_item" key={index}>
              <ProductCard productProps={item} />
            </div>
          ))
        }
      </div>
    </div>
  )
}   
export default RelatedProducts