import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {catalogData} from '../Assets/data/CatalogData'

const CatalogList = (props) => {

  const navigate = useNavigate();
  
  const goToCatalogPage = (catalogSlug) => {
    navigate(`/${catalogSlug}`);
  };
  let cats = null

  // const add_class = () => cat.current.classList.add("catalog_list");
  // const remove_class = () => cat.current.classList.remove("catalog_list");
  // let x;
  // let y;
  // const foo = (e) => { 

  //   x = e.clientX - e.target.offsetLeft;
  //   y = e.clientY - e.target.offsetTop;
  //   const circle = document.createElement("span");
  //   circle.style.left = x + "px";
  //   circle.style.top = y + "px";
  //   item.appendChild(circle);
  //   console.log(e.target);
  //   setTimeout(() => {
  //     circle.remove();
  //   }, 1000);
  // }
  
  // useEffect(() => {
  //    cats = document.querySelectorAll(".catalog_link");
  //     cats.forEach((item) => {
  //       item.addEventListener( 'click', (e) => {
  //         let x = e.clientX - e.target.offsetLeft;
  //         let y = e.clientY - e.target.offsetTop;
  //         const circle = document.createElement("span");
  //         circle.style.left = x + "px";
  //         circle.style.top = y + "px";
  //         item.appendChild(circle);
  //         console.log(e.clientX);
  //         console.log(e.target.offsetTop);
  //         console.log(e.currentTarget.offsetTop);
  //         setTimeout(() => {
  //           circle.remove();
  //         }, 500);
  //       });
  //     });


  // },[])
  return (
    <div
      className="catalog"
      // onMouseOver={add_class}
      // onMouseOut={remove_class}
      // ref={catalogRef}
    >
      <div id="catalog_list" style={{height:props.height,overflow:props.overflow}}>
        {catalogData.map((item, i) => (
            <a
              className="catalog_link"
              href="javascript:void(0);"
              key={i}
              onClick={() => {
                if (props.navbar) {
                  props.animCatalog()
                }
                goToCatalogPage(item.path);
              }}
            >
              <div>{item.display}</div>
            </a>
        ))}
      </div>
    </div>
  );
}

export default CatalogList