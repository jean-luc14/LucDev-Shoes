import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { SectionTitle } from "../components/Sections";
import Paypal from '../components/Paypal'

const Cart = props => {

  const currentUser = useSelector((state) => state.firebase.value.currentUser);
  
  const [cartItems, setCartItems] = useState(useSelector((state) => state.cartItems.value));
  const [cartItemsClone, setCartItemsClone] = useState(cartItems);
  const [totalProduct, setTotalProduct] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  

  useEffect(() => {
    setCartItems(cartItemsClone);
    // setTotalProduct(cartItems.reduce((total,e) => total + Number(e.quantity),0));
    // setTotalPrice(cartItems.reduce((total,e) => total + Number(e.quantity) * Number(e.price)),0);
  }, [cartItemsClone]);
  
  return (
    <>
      <SectionTitle ProductCards={cartItemsClone} cartPage={true}>
        {'Shopping Cart'}
      </SectionTitle>
      {cartItems.length > 0 ? (
        <div className="cart">
          <div className="cart_info">
            <div className="cart_info_product">
              {cartItems.map((item, index) => (
                <CartItem
                  key={index}
                  item={item}
                  cartItemsClone={cartItemsClone}
                  setCartItemsClone={setCartItemsClone}
                />
              ))}
            </div>
            <div className="cart_info_txt">
              {/* <h1>Total Price {totalPrice}</h1>
              <h1>Total Product {totalProduct}</h1> */}
              {currentUser ? (
                <Paypal />
              ) : (
                <button type="button">Buy Now</button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <h1>Vous n'avez rien dans le panier</h1>
      )}
    </>
  );
}

export default Cart