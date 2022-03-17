import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {catalogData} from '../Assets/data/CatalogData'
import '../scss/components/CatalogList.scss'

const CatalogList = () => {

  const cat = useRef(null);
  const navigate = useNavigate();
  
  const goToCatalogPage = (catalogSlug) => {
    navigate(`/${catalogSlug}`);
  };

  // const add_class = () => cat.current.classList.add("catalog_list");
  // const remove_class = () => cat.current.classList.remove("catalog_list");
  
  // useEffect(() => {
  //    const cats_list = document.querySelectorAll(".catalogLink");
  //    cats_list.forEach((cat_list) => {
  //      cat_list.onclick = (e) => {
  //        let x = e.clientX - catalogRef.current.offsetLeft;
  //        let y = e.clientY - catalogRef.current.offsetTop;

  //        const circle = document.createElement("span");
  //        circle.style.left = x + "px";
  //        circle.style.top = y + "px";

  //        cat_list.appendChild(circle);

  //        setTimeout(() => {
  //          circle.remove();
  //        }, 1000);
  //      };
  //    });
  // })
  return (
    <div
      className="catalog"
      // onMouseOver={add_class}
      // onMouseOut={remove_class}
      // ref={catalogRef}
    >
      <div className="catalog_child">Category</div>
      <div ref={cat} id="catalog_list">
        {/* <span></span> */}
        {catalogData.map((item, i) => (
          <div key={i} onClick={() => goToCatalogPage(item.path)}>
            <a className="catalogLink" href="javascript:void(0);">
              <div>{item.display}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogList