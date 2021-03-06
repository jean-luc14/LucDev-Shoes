import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductView from "../components/ProductView";
import ProductInfo from "../components/ProductInfo";
import RelatedProducts from "../components/RelatedProducts";
import NewAndFavorite from "../components/NewAndFavorite";
import { productData } from "../Assets/data/ProductData";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const ProductPage = () => {
  const [product, setProduct] = useState(undefined);
  const params = useParams();
  const id = params.id;
  const category = params.category;

  useEffect(() => {
    //get from firestore product which have as category param.category, id param.id and put it to the state
    const getProductByCategoryAndId = async () => {
      let q = query(
        collection(db, "productData"),
        where("category", "==", category),
        where("id", "==", id)
      );

      const querySnapshot = await getDocs(q);
      let prod;
      querySnapshot.forEach((doc) => {
        prod = doc.data();
      });

      setProduct(prod);
    };
    getProductByCategoryAndId();
  }, [id, category]);

  return (
    <div>
      <ProductView product={product} Modal={false} />
      <ProductInfo product={product} />
      <RelatedProducts product={product} />
      <NewAndFavorite />
    </div>
  );
};

export default ProductPage;
