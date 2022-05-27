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
    navigate(`/${catalogSlug}/${id}`);
  }

  //Catch current product id and category
  const id = props.productProps.id;
  const catalogSlug = props.productProps.catalogSlug;

  //Dispatch
  const dispatch = useDispatch();
  console.log(props.productProps.color[0].img);
  return (
    <div className="productCard" onClick={() => goToProductPage(catalogSlug, id)}>
      <img className="productCardImg" src={props.productProps.color[0].img} />
      <div className="productCardInfo">
        <h1 className="productCardPrice">
          US ${props.productProps.price}
        </h1>
        <div className="productCardName">{props.productProps.name}</div>
        <div className="productCardButton">
          {/* Button to show a productdetail in modal */}
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