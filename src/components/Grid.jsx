import React from 'react'


const Grid = (props) => {
  return (
    <div className='wrapperGridCenter'>
      <div className="wrapperGrids">
        {props.children}
      </div>
    </div>
  );
}

export default Grid