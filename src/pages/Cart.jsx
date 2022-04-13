import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { getCartItemsDetail } from '../Assets/data/ProductData'
import CartItem from '../components/CartItem'
import Paypal from '../components/Paypal'

const Cart = props => {

  const currentUser = useSelector((state) => state.firebase.value.currentUser);

  const cartItems = useSelector((state) => state.cartItems.value)
  const [cartProduct, setCartProduct] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    setCartProduct(getCartItemsDetail(cartItems));
    setTotalProduct(cartItems.reduce((total,e)=>total + Number(e.quantity),0));
    setTotalPrice(cartItems.reduce((total,e) => total + Number(e.quantity) * Number(e.price)),0);

  }, [cartProduct])
  
  return (
    <>
      <div className="cart">
        <div className="cart_info">
          <div className="cart_info_product">
            {cartProduct.map((item, index) => (
              <CartItem item={item} key={index} />
            ))}
          </div>
          <div className="cart_info_txt">
            <h1>Total Price {totalPrice}</h1>
            <h1>Total Product {totalProduct}</h1>
            {currentUser ? (
              <Paypal />
            ) : (
              <button>
               Buy Now
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}


export default Cart