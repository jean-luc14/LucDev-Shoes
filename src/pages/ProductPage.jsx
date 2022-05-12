import React, { useState, useEffect }from 'react'
import { useParams } from 'react-router-dom'
import ProductView from '../components/ProductView'
import NewAndFavorite from "../components/NewAndFavorite";
import {productData} from "../Assets/data/ProductData";

const ProductPage = () => {

  const [product, setProduct] = useState(undefined);
  const params = useParams();
  const id = params.id;
  const catalogSlug = params.catalogSlug;

  useEffect(() => {
    productData.forEach((e) => {
      if ((id === e.id) & (catalogSlug === e.catalogSlug)) {
        setProduct(e);
      }
    });
  }, [id, catalogSlug]);

  return (
    <div>
      <ProductView product={product} />
      <NewAndFavorite/>
    </div>
  )
}

export default ProductPage