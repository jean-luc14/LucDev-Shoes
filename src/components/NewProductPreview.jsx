import React from "react";

const NewProductPreview = ({ productForm }) => {
  return (
    <div className="new_product_preview">
      <ul>
        <li>Product Category:{productForm.category}</li>
        <li>Product Id:{productForm.id}</li>
        <li>Product Name:{productForm.name}</li>
        <li>Product Price:{productForm.price}</li>
        <li>Product Favorite:{productForm.favorite}</li>
      </ul>
      <div className="new_product_preview_size">
        <div>Product Sizes:</div>
        {productForm.size &&
          productForm.size.map((item, index) => <div key={index}>{item},</div>)}
      </div>
      <div>Material Description:{productForm.description.material}</div>
      <div>Material Process:{productForm.description.process}</div>
      <div>Material Sizes:{productForm.description.size}</div>
      <div className="new_product_preview_color">
        <div>Product Colors:</div>
        {productForm.color &&
          productForm.color.map((item, index) => (
            <div key={index} className="item">
              <div>{item.name}</div>
              <div className="item_img">
                <img src={item.img} alt={item.name} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewProductPreview;
