import React, { useState, useEffect } from "react";
import ProductView from "./ProductView";
import { getProductByCatalogAndId } from "../Assets/data/ProductData";
import { useSelector } from "react-redux";

const ProductViewModal = () => {
  const productId = useSelector((state) => state.productModal.value.id);
  const productCatalogSlug = useSelector(
    (state) => state.productModal.value.catalogSlug
  );
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    setProduct(getProductByCatalogAndId(productCatalogSlug, productId));
  }, [productCatalogSlug, productId]);

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
