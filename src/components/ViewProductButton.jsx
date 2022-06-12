import React from "react";
import PropTypes from "prop-types";

const ViewProductButton = (props) => {
  return (
    <button className="view_button" onClick={props.click}>
      View
    </button>
  );
};

ViewProductButton.propTypes = {};

export default ViewProductButton;
