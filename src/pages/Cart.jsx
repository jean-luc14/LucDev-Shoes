import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { SectionTitle } from "../components/Sections";
import Progress from "../components/Progress";
import { updateTotal } from "../redux/shoppingCart/TotalSlice";
import { toggle_log } from "../redux/toggleModal/ToggleModalSlice";

const Cart = (props) => {
  //get products from redux state which are been added to cart
  const [cartItems, setCartItems] = useState(
    useSelector((state) => state.cartItems.value)
  );
  const [cartItemsClone, setCartItemsClone] = useState(cartItems);

  //get nap of all product price and product number
  let ttlPrice = cartItemsClone.reduce(
    (total, e) => total + e.quantity * Number.parseFloat(e.price),
    0
  );
  const [totalProduct, setTotalProduct] = useState(
    cartItemsClone.reduce((total, e) => total + e.quantity, 0)
  );
  const [totalPrice, setTotalPrice] = useState(ttlPrice.toFixed(2));

  // know if current user is connect
  const currentUser = useSelector((state) => state.firebase.value.currentUser);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //if user is already connect, send total price and product to redux store and go to checkout page
  const goToCheckout = () => {
    if (currentUser) {
      dispatch(updateTotal({ totalPrice, totalProduct }));
      navigate("/user-connected/checkout-cart");
    } else {
      dispatch(toggle_log());
    }
  };

  useEffect(() => {
    setCartItems(cartItemsClone);
  }, [cartItemsClone]);

  return (
    <>
      <SectionTitle ProductCards={cartItemsClone} cartPage={true}>
        {`Shopping Cart (${cartItems.length})`}
      </SectionTitle>
      {cartItems.length > 0 ? (
        <div className="cart">
          <Progress shopping={true} />
          <div className="cart_products">
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                cartItemsClone={cartItemsClone}
                setCartItemsClone={setCartItemsClone}
                totalProduct={totalProduct}
                totalPrice={totalPrice}
                setTotalProduct={setTotalProduct}
                setTotalPrice={setTotalPrice}
              />
            ))}
          </div>
          <div className="cart_info">
            <h1>Carts Total</h1>
            <h2>
              Total Price : <span> ${totalPrice}</span>
            </h2>
            <h2>
              Total Product : <span> {totalProduct} </span>
            </h2>
            <button onClick={goToCheckout} type="button">
              Buy Now
            </button>
          </div>
        </div>
      ) : (
        <h1 className="nothing_cart">
          You haven't product in cart.
          <span
            onClick={() => {
              navigate("/");
            }}
          >
            {" "}
            Home
          </span>{" "}
        </h1>
      )}
    </>
  );
};

export default Cart;
