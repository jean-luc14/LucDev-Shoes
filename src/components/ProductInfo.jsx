import React, { useEffect } from "react";

const ProductInfo = ({ product }) => {
  useEffect(() => {
    //Add active class to title of description if he is visible in viewport
    const animateDescriptionTitle = () => {
      if (product) {
        //get HtmlElement title container of product info
        const productInfo = document.querySelector(".product_info");

        //get HtmlElement title (h1)
        const title = document.querySelector(".product_info h1");

        const { scrollTop, clientHeight } = document.documentElement;
        const TopProductInfoToTopViewport =
          productInfo.getBoundingClientRect().top;
        if (
          scrollTop >
          (scrollTop + TopProductInfoToTopViewport).toFixed() -
            clientHeight * 0.7
        ) {
          title.classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", animateDescriptionTitle());
    return () => {
      window.removeEventListener("scroll", animateDescriptionTitle());
    };
  }, [product]);
  return (
    <>
      {product && (
        <div className="product_info">
          <div className="product_info_description">
            <h1>Description</h1>
          </div>
          <div className="product_info_content">
            <div className="product_info_content_material">
              <h2>Material</h2>
              <div>{product.description.material}</div>
            </div>
            <div className="product_info_content_process">
              <h2>Process</h2>
              {product.description.material}
            </div>
            <div className="product_info_content_guide">
              {product === undefined ? null : (
                <div className="img_wrapper">
                  <img src={product.color[1].img} alt={product.color[1].name} />
                </div>
              )}
              <div className="size_guide">
                <h2>Size Guide</h2>
                {product.description.material}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductInfo;
