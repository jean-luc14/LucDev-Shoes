import React,{useState,useEffect} from 'react'
import ProductView from './ProductView'
import { getProductByCatalogAndId } from "../Assets/data/ProductData"
import {useSelector,useDispatch} from 'react-redux'
import { remove } from "../redux/product/ProductSlice";

const ProductViewModal = () => {

  const productId = useSelector(state => state.product.value.id)
  const productCatalogSlug = useSelector(
    (state) => state.product.value.catalogSlug
  );
  const dispatch = useDispatch()
  const [product, setProduct] = useState(undefined)

  useEffect(() => {
    setProduct(getProductByCatalogAndId(productCatalogSlug,productId));
  }, [productCatalogSlug, productId]);
     
  return (
    <div
      className={`productViewModal ${product === undefined ? "" : "active"}`}
      >
      <span className ='close'onClick={() => dispatch(remove())}> &times;</span>
      <div className="productViewModal__background"></div>
      <div className="productViewModal__content">
        <ProductView product={product} Modal={true} />
      </div>
    </div>
  );
}

export default ProductViewModal