import React from 'react'
import CategoryList from "./CategoryList";
import BestCategory from "./BestCategory";
import NewAndFavorite from "./NewAndFavorite"; 

const BodyLayOut = () => { 
  
  return (
    <div className="body_home_page">
      <div className="body_home_page_section_1">
        <BestCategory />
      </div>
      <div className="body_home_page_section_2">
        <div className="layout-categoryList">
          <CategoryList navbar={false} />
        </div>
        <NewAndFavorite bodyHomePage={true}/>
      </div>
    </div>
  );
}


export default BodyLayOut