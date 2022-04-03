import React from 'react'
import PropTypes from 'prop-types'

const BuyProductButton = props => {
  return (
      <button className="buyButton" onClick={props.click}>Buy</button>
  );
}

BuyProductButton.propTypes = {}

export default BuyProductButton