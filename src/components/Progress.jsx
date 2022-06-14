import React from "react";
import ShoppingCardCheckout from "../Assets/icons/shopping-card-checkout.png";
import CheckoutCashierCard from "../Assets/icons/checkout-cashier-card.png";
import CompleteCheckout from "../Assets/icons/complete-checkout.png";

const Progress = (props) => {
  return (
    <div className="progress">
      <div className="progress_item">
        <div className={`${props.shopping ? "active" : ""}`}>
          <img src={ShoppingCardCheckout} alt="shopping-card-checkout" />
        </div>
        <h2>Shopping Cart</h2>
      </div>
      <div className={`progress_arrow ${props.shopping ? "active" : ""}`}>
        <span></span>
      </div>
      <div className="progress_item">
        <div className={`${props.checkout ? "active" : ""}`}>
          <img src={CheckoutCashierCard} alt="checkout-cashier-card" />
        </div>
        <h2>Checkout</h2>
      </div>
      <div className={`progress_arrow ${props.checkout ? "active" : ""}`}>
        <span></span>
      </div>
      <div className="progress_item">
        <div className={`${props.complete ? "active" : ""}`}>
          <img src={CompleteCheckout} alt="complete-checkout" />
        </div>
        <h2>Order Complete</h2>
      </div>
    </div>
  );
};

export default Progress;
