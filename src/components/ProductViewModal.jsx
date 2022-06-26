import React, { useState, useEffect } from "react";
import ProductView from "./ProductView";
import { getProductByCategoryAndId } from "../Assets/data/ProductData";
import { useSelector } from "react-redux";

const ProductViewModal = () => {
  const productId = useSelector((state) => state.productModal.value.id);
  const productCategory = useSelector(
    (state) => state.productModal.value.category
  );
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    setProduct(getProductByCategoryAndId(productCategory, productId));
  }, [productCategory, productId]);

  return (
    <div
      className={`productViewModal ${product === undefined ? "" : "active"}`}
    >
      {product === undefined ? null : (
        <ProductView product={product} Modal={true} />
      )}
    </div>
  );
};

export default ProductViewModal;
