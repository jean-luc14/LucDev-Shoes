import React from 'react'

const Progress = (props) => {
  return (
    <div className="progress">
      <div className="progress_item">
        <div
          className={`${props.shopping ? "active" : ""}`}
        ></div>
        <h2>Shopping Cart</h2>
      </div>
      <div className={`progress_arrow ${props.shopping ? "active" : ""}`}>
        <span></span>
      </div>
      <div className="progress_item">
        <div
          className={`${props.checkout ? "active" : ""}`}
        ></div>
        <h2>Checkout</h2>
      </div>
      <div className={`progress_arrow ${props.checkout ? "active" : ""}`}>
        <span></span>
      </div>
      <div className="progress_item">
        <div
          className={`${props.complete ? "active" : ""}`}
        ></div>
        <h2>Order Complete</h2>
      </div>
    </div>
  );
}

export default Progress