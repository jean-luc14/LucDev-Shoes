import React from 'react'
import { useNavigate } from 'react-router-dom'
import {catalogData} from '../Assets/data/CatalogData'

const CatalogList = (props) => {

  const navigate = useNavigate();
  
  const goToCatalogPage = (catalogSlug) => {
    navigate(`/catalog=${catalogSlug}`);
  }; 

  return (
    <div
      className="catalog_list"
    >
      <div className={`catalog_list_child ${props.navbar ? 'navbar':''}`} >
        {catalogData.map((item, i) => (
            <div
              className="catalog_link" 
              key={i}
              onClick={() => {
                if (props.navbar) {
                  props.animCatalogList()
                }
                goToCatalogPage(item.path);
              }}
            >
              <div className="catalog_link_child" >{item.display}</div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogList