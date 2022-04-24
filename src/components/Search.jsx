import React,{useRef,useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import Search_icon from '../Assets/icons/search_icon.png';
import {productData} from '../Assets/data/ProductData'

const Search = props => {
  const animSearch = useRef(null)
  const [dynamic_search_data,setDynamic_search_data] = useState([])
  const [inputValue, setInputValue] = useState('');

  // fonction qui met a jour la valeur de l'input dans le state ,et recherhe les donnees 
  const searchProductFoo = e => {
    setInputValue(e.target.value);
    var regex = new RegExp(`${inputValue}`);

    var dynamic_result = productData.filter( e => {
      return regex.test(e.name);
    })
    setDynamic_search_data(dynamic_result);
  }
  console.log(dynamic_search_data);
  
 // Ajout de class pour animer l'input au click
  const animSearchFoo = () => {
    animSearch.current.classList.toggle('animSearch')
  }
  return (
    <div ref={animSearch} className="Search_wrapper">
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={searchProductFoo}
      ></input>
      <img className="Search_icon" src={Search_icon} onClick={animSearchFoo} />
      <div className='dynamic_search_results' >
        <span className={`${dynamic_search_data.length > 0 ? 'triangle' : ''}`}></span>
        {dynamic_search_data.map((e, i) => (
          <div key={i} className="dynamic_search_item">
            <div className="dynamic_search_item_img">
              <img src={e.img} alt={e.name} />
            </div>
            <div className="dynamic_search_item_content">
              <p className="dynamic_search_item_content_price">US ${e.price}</p>
              <p className="dynamic_search_item_content_category">{e.catalogSlug}</p>
              <p className="dynamic_search_item_content_name">{e.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Search.propTypes = {}

export default Search