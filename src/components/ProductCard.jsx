import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import BuyProductButton from './BuyProductButton'
import  '../scss/components/ProductCard.scss'
import { useDispatch } from 'react-redux'
import {set} from '../redux/productModal/ProductModalSlice'

const ProductCard = props => {
  const navigate = useNavigate();
  const goToProductPage = (catalogSlug,id) => {
    navigate(`/${catalogSlug}/${id}`);
  }
  const id = props.productProps.id;
  const catalogSlug = props.productProps.catalogSlug;
  const dispatch = useDispatch();
  return (
    <div className="productCard" onClick={() => goToProductPage(catalogSlug, id)}>
      <img className="productCardImg" src={props.productProps.img} />
      <div className="productCardInfo">
        <h1 className="productCardPrice">
          {props.productProps.price}
        </h1>
        <div className="productCardName">{props.productProps.name}</div>
        <div className="productCardButton">
          <BuyProductButton
            click={(e) => {
              dispatch(set({ id, catalogSlug }));
              e.stopPropagation();
            }}
          />
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  productProps:PropTypes.object.isRequired
}

export default ProductCard