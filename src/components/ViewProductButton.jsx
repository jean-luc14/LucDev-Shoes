import React from "react";

const ViewProductButton = (props) => {
  return (
    <button className="view_button" onClick={props.click}>
      View
    </button>
  );
};

export default ViewProductButton;
