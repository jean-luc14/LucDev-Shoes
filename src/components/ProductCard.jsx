import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import BuyProductButton from './BuyProductButton'
import  '../scss/components/ProductCard.scss'

const ProductCard = props => {
  const navigate = useNavigate();
  const goToProductPage = (catalogSlug,id) => {
    navigate(`/${catalogSlug}/${id}`);
  }
  return (
    <div
      className="productCard"
      onClick={() =>
        goToProductPage(props.productProps.catalogSlug, props.productProps.id)
      }
    >
      <img className="productCardImg" src={props.productProps.img} />
      <div className="productCardInfo">
        <h1 className="productCardPrice">{props.productProps.price}</h1>
        <div className="productCardName">{props.productProps.name}</div>
        <div className="productCardButton">
          <BuyProductButton />
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  productProps:PropTypes.object.isRequired
}

export default ProductCard