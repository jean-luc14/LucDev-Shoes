import React,{useState,useEffect} from 'react'
import ProductView from './ProductView'
import { getProductByCatalogAndId } from "../Assets/data/ProductData"
import {useSelector,useDispatch} from 'react-redux'
import { remove } from "../redux/productModal/ProductModalSlice";

const ProductViewModal = () => {

  const productId = useSelector(state => state.productModal.idValue)
  const productCatalogSlug = useSelector(
    (state) => state.productModal.catalogSlugValue
  );
  const dispatch = useDispatch()
  const [product, setProduct] = useState(undefined)

  useEffect(() => {
    setProduct(getProductByCatalogAndId(productCatalogSlug,productId));
  }, [productCatalogSlug,productId]);
     
  return (
    <div className={`productViewModal ${product === undefined ? '' : 'active'}`}>
      <div className="productViewModal__content">
        <ProductView product={product} />
        <span onClick={()=>dispatch(remove())} > &times;</span>
      </div>
    </div>
  );
}

export default ProductViewModal