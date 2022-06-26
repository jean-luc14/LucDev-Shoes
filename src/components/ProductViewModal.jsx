import React, { useState, useEffect } from "react";
import ProductView from "./ProductView";
import { getProductByCategoryAndId } from "../Assets/data/ProductData";
import { useSelector } from "react-redux";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const ProductViewModal = () => {
  const productId = useSelector((state) => state.productModal.value.id);
  const productCategory = useSelector(
    (state) => state.productModal.value.category
  );
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    //get from firestore product which have as category param.category, id param.id and put it to the state
    const getProductByCategoryAndId = async () => {
      if (productCategory && productId) {
        let q = query(
          collection(db, "productData"),
          where("category", "==", productCategory),
          where("id", "==", productId)
        );

        const querySnapshot = await getDocs(q);
        let prod;
        querySnapshot.forEach((doc) => {
          prod = doc.data();
        });

        setProduct(prod);
      } else {
        setProduct(undefined);
      }
    };
    getProductByCategoryAndId();
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
