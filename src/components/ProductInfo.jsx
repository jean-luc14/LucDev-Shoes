import React,{useEffect} from 'react'

const ProductInfo = (props) => {
  useEffect(() => {
    //Catch title container
    const productInfo = document.querySelector(".product_info");
    
    //Catch title (h1)
    const title = document.querySelector(".product_info h1");
  
    //Add active class to title if he is visible in viewport
    window.addEventListener("scroll", () => {
      const { scrollTop, clientHeight } = document.documentElement;
      const TopProductInfoToTopViewport =
        productInfo.getBoundingClientRect().top;
      if (
        scrollTop >
        (scrollTop + TopProductInfoToTopViewport).toFixed() - clientHeight * 0.7
      ) {
          title.classList.add("active");
      }
    });},[])
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
            <div className='img_wrapper'>
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
}

export default ProductInfo