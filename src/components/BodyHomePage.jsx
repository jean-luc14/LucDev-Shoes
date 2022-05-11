import React,{useEffect} from 'react'
import CatalogList from "./CatalogList";
import BestCategory from "./BestCategory";
import NewAndFavorite from "./NewAndFavorite";
import ImgD from '../Shoes_image/Oxford/D.jpg';

const BodyLayOut = props => {

  
  return (
    <div className="body_home_page">
      <div className="body_home_page_section_1">
        <BestCategory />
      </div>
      <div className="body_home_page_section_2">
        <div className="layout-catalogList">
          <CatalogList navbar={false} />
        </div>
        <NewAndFavorite/>
      </div>
    </div>
  );
}


export default BodyLayOut