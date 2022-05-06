import React,{useRef,useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Search_icon from '../Assets/icons/search_icon.png';
import { searchProducts } from "../Assets/data/ProductData";


const Search = props => {
  const animSearch = useRef(null)
  const [dynamic_search_data,setDynamic_search_data] = useState([])
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  // fonction qui met a jour la valeur de l'input dans le state et lance la recherche des produits

  const searchProductFoo = e => {
    setInputValue(e.target.value);
    var dynamic_result = searchProducts(inputValue);
    console.log(inputValue);
    setDynamic_search_data(dynamic_result);
  }
  
 // Ajout de class pour animer l'input au click
  const animSearchFoo = () => {
    animSearch.current.classList.toggle('animSearch')
  }
// fonction to go to product page 
  const goToProductPage = (catalogSlug,id) => {
    navigate(`/${catalogSlug}/${id}`)
    setInputValue('')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${inputValue}`);
    setInputValue('');
    animSearchFoo();
  }
  return (
    <div ref={animSearch} className="Search_wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={inputValue}
          onInput={searchProductFoo}
        ></input>
        <img
          className="Search_icon"
          src={Search_icon}
          onClick={animSearchFoo}
        />
        <div className="dynamic_search_results">
          <span
            className={`${
              (inputValue.length > 2) & (dynamic_search_data.length > 0) ? "triangle" : ""
            }`}
          ></span>
          {inputValue.length > 2
            ? dynamic_search_data.map((e, i) => (
                <>
                  <div
                    key={i}
                    className="dynamic_search_item"
                    onClick={() => goToProductPage(e.catalogSlug, e.id)}
                  >
                    <div className="dynamic_search_item_img">
                      <img src={e.img} alt={e.name} />
                    </div>
                    <div className="dynamic_search_item_content">
                      <p className="dynamic_search_item_content_price">
                        US ${e.price}
                      </p>
                      <p className="dynamic_search_item_content_category">
                        {e.catalogSlug}
                      </p>
                      <p className="dynamic_search_item_content_name">
                        {e.name}
                      </p>
                    </div>
                  </div>
                  <input type="submit" value="Plus"></input>
                </>
              ))
            : null}
        </div>
      </form>
    </div>
  );
}
export default Search