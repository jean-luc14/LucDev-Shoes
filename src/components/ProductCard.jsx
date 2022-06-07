import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import BuyProductButton from './BuyProductButton'
import { useDispatch } from 'react-redux'
import {set} from '../redux/product/ProductSlice'

const ProductCard = props => {
  //Navigate
  const navigate = useNavigate();

  //Go to product page func
  const goToProductPage = (catalogSlug,id) => {
    navigate(`/catalog=${catalogSlug}&id=${id}`);
  }

  //Catch current product id and category
  const id = props.productProps.id;
  const catalogSlug = props.productProps.catalogSlug;

  //Dispatch
  const dispatch = useDispatch();
  return (
    <div className="product_card" >
      <div className={`product_card_child ${props.newAndFavorite ? 'newAndFavorite':''}`}
        onClick={() => goToProductPage(catalogSlug, id)}
      >
        <img src={props.productProps.color[0].img} /> 
        <div className="product_card_child_name">
          {props.productProps.name}
        </div> 
      </div>
      <h1 className="product_card_price">
        US ${props.productProps.price}
      </h1> 
      {/* Button to show a product detail in modal with redux */}
      <BuyProductButton
        click={(e) => {
          dispatch(set({ id, catalogSlug }));
          e.stopPropagation();
        }}
      /> 
    </div>
  );
}

ProductCard.propTypes = {
  productProps:PropTypes.object.isRequired
}

export default ProductCard