import React, { useEffect } from "react";

const ProductInfo = (props) => {
  useEffect(() => {
    //get HtmlElement title container of product info
    const productInfo = document.querySelector(".product_info");

    //get HtmlElement title (h1)
    const title = document.querySelector(".product_info h1");

    //Add active class to title of description if he is visible in viewport
    const animateDescriptionTitle = () => {
      const { scrollTop, clientHeight } = document.documentElement;
      const TopProductInfoToTopViewport =
        productInfo.getBoundingClientRect().top;
      if (
        scrollTop >
        (scrollTop + TopProductInfoToTopViewport).toFixed() - clientHeight * 0.7
      ) {
        title.classList.add("active");
      }
    };

    window.addEventListener("scroll", animateDescriptionTitle());

    return () => {
      window.removeEventListener("scroll", animateDescriptionTitle());
    };
  }, []);
  return (
    <div className="product_info">
      <div className="product_info_description">
        <h1>Description</h1>
      </div>
      <div className="product_info_content">
        <div className="product_info_content_material">
          <h2>Material</h2>
          <div>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            rerum esse dolore voluptatem totam velit quisquam repellendus eum
            tenetur labore! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Minus laudantium inventore suscipit perspiciatis possimus nisi
            placeat accusantium consectetur ea sed!
          </div>
          <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. I </li>
            <li> voluptatem totam velit quisquam repellendus eum</li>
            <li>adipisicing elit. Inventore rerum esse</li>
            <li> possimus nisi placeat accusantium consectetur ea sed!</li>
            <li>elit. Minus laudantium inventore suscipit</li>
          </ol>
        </div>
        <div className="product_info_content_process">
          <h2>Process</h2>
          <div>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            rerum esse dolore voluptatem totam velit quisquam repellendus eum
            tenetur labore! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Minus laudantium inventore suscipit perspiciatis possimus nisi
            placeat accusantium consectetur ea sed!
          </div>
          <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. I </li>
            <li> voluptatem totam velit quisquam repellendus eum</li>
            <li>adipisicing elit. Inventore rerum esse</li>
            <li> possimus nisi placeat accusantium consectetur ea sed!</li>
            <li>elit. Minus laudantium inventore suscipit</li>
          </ol>
        </div>
        <div className="product_info_content_guide">
          {props.product === undefined ? null : (
            <div className="img_wrapper">
              <img
                src={props.product.color[1].img}
                alt={props.product.color[1].name}
              />
            </div>
          )}
          <div className="size_guide">
            <h2>Size Guide</h2>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              temporibus minus similique, sed iure eligendi? Quaerat, veritatis
              totam animi voluptatum saepe, dolorem eum deserunt nobis vel ipsum
              aut nostrum necessitatibus!
            </div>
            <ol>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. I{" "}
              </li>
              <li> voluptatem totam velit quisquam repellendus eum</li>
              <li>adipisicing elit. Inventore rerum esse</li>
              <li> possimus nisi placeat accusantium consectetur ea sed!</li>
              <li>elit. Minus laudantium inventore suscipit</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
