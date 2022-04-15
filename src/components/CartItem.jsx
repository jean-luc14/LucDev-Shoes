import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import {useDispatch} from'react-redux'
import {Link} from 'react-router-dom'
import { updateItem, removeItem } from '../redux/shoppingCart/CartItemsSlide'
import Delete from "../Assets/icons/delete.png";
import Plus from "../Assets/icons/plus.png";
import Minus from "../Assets/icons/minus.png";

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
            <img src={Minus} onClick={() => updateQuantity("-")} />
          </div>
          <div className="cart_item_info_quantity_item">{item.quantity}</div>
          <div className="cart_item_info_quantity_btn">
            <img src={Plus} onClick={() => updateQuantity("+")} />
          </div>
        </div>
      </div>
      <div className="cart_item_del">
        <img src={Delete} onClick={() => removeCartItem()} />
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item:PropTypes.object,
}

export default CartItem