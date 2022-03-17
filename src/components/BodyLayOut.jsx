import React from 'react'
import CatalogList from "./CatalogList";
import '../scss/components/BodyLayOut.scss'

const BodyLayOut = props => {
  return (
    <div className="body_layout">
      <div className="layout-catalogList">
        <CatalogList />
      </div>
      <div className='render'>
        {props.render()}
      </div>
    </div>
  );
}


export default BodyLayOut