import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import {useDispatch} from'react-redux'
import {Link} from 'react-router-dom'
import {updateItem,removeItem} from '../redux/shoppingCart/CartItemsSlide'

const CartItem = props => {
  const dispatch = useDispatch();

  const [item, setItem] = useState(props.item)
  const [quantity, setQuantity] = useState(props.item.quantity)

  const updateQuantity = (opt) => {
    if (opt === '+') {
      dispatch(updateItem({...item,quantity:quantity + 1}))
    }
    if (opt === '-') {
      dispatch(
        updateItem({ ...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1 })
      );
    }
  }
  const removeCartItem = () => {
    dispatch(removeItem(item))
  }

  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
    console.log(props.item.product.name);
  }, [item]);
  
  return (
    <div className="cart_item">
      <div className="cart_item_img">
        <img src={item.img} />
      </div>
      <div className="cart_item_info">
        <div className="cart_item_info_name">{item.product.name}</div>
        <div className="cart_item_info_color">{item.color}</div>
        <div className="cart_item_info_size">{item.size}</div>
        <div className="cart_item_info_quantity">
          <div className="cart_item_info_quantity_btn">
            <i className="fa fa-minus" onClick={() => updateQuantity("-")}></i>
          </div>
          <div className="cart_item_info_quantity_item">{item.quantity}</div>
          <div className="cart_item_info_quantity_btn">
            <i className="fa fa-plus " onClick={() => updateQuantity("+")}></i>
          </div>
        </div>
      </div>
      <div className="cart_item_del">
        <i className="fa fa-trash" onClick={() => removeCartItem()}></i>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item:PropTypes.object,
}

export default CartItem