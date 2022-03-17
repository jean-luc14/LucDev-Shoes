import React from 'react'
import  '../scss/components/Grid.scss'

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