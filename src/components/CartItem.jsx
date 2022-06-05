import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import {useDispatch} from'react-redux'
import {Link} from 'react-router-dom'
import { updateItem, removeItem, delItem, sortItems } from '../redux/shoppingCart/CartItemsSlice'
import Delete from "../Assets/icons/delete.png";
import Plus from "../Assets/icons/plus.png";
import Minus from "../Assets/icons/minus.png";

const CartItem = props => {
  const dispatch = useDispatch();
  const [item, setItem] = useState(props.item); 
  const [quantity, setQuantity] = useState(props.item.quantity);

  // update quantity of current product and in CartItemsSlice
  const updateQuantity = (opt) => {
    if (opt === "+") {
      dispatch(updateItem({ ...item, quantity: quantity + 1 }));
      setQuantity(quantity + 1);
    }
    if (opt === "-") {
      dispatch(
        updateItem({ ...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1 })
      );
      setQuantity( quantity - 1 === 0 ? 1 : quantity - 1);
    }
  };

  //remove current product in cart products list and in CartItemsSlice
  const removeCartItem = () => {
    let arr = [...sortItems(delItem(props.cartItemsClone, item))];
    dispatch(removeItem(item));
    props.setCartItemsClone(arr);
  };

  useEffect(() => {
    setItem(props.item); 
  }, [props.item]);

  return (
    <div className="cart_item">
      <div className="cart_item_img">
        <img src={item.img} />
      </div>
      <div className="cart_item_info">
        <div className="cart_item_info_name">{item.name}</div>
        <div className="cart_item_info_color">{item.color}</div>
        <div className="cart_item_info_size">{item.size}</div>
        <div className="cart_item_info_quantity">
          <div className="cart_item_info_quantity_btn">
            <img src={Minus} onClick={() => updateQuantity("-")} />
          </div>
          <div className="cart_item_info_quantity_item">{quantity}</div>
          <div className="cart_item_info_quantity_btn">
            <img src={Plus} onClick={() => updateQuantity("+")} />
          </div>
        </div>
      </div>
      <div className="cart_item_del">
        <img src={Delete} onClick={removeCartItem} />
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item:PropTypes.object,
}

export default CartItem