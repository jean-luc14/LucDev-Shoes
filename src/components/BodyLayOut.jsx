import React from 'react'
import CatalogList from "./CatalogList";

const BodyLayOut = props => {
  return (
    <div className="body_layout">
      <div className="layout-catalogList">
        <CatalogList navbar={false}/>
      </div>
      <div className='render'>
        {props.render()}
      </div>
    </div>
  );
}


export default BodyLayOut