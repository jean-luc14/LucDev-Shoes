import React,{useRef,useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import '../scss/components/Search.scss'
import Search_icon from '../iconAndImages/search_icon.png';
import ProductData from '../Assets/data/ProductData'

const Search = props => {
  const animSearch = useRef(null)
  const [dynamic_search_data,setDynamic_search_data] = useState([])
  const [inputValue, setInputValue] = useState(null);

  const searchProductFoo = (e) => {
    setInputValue(e.target.value);
    var regex = new RegExp(`${inputValue}`);

    var dynamic_result = ProductData.filter( e => {
      return regex.test(e.name) === true;
    })
    setDynamic_search_data(dynamic_result);
    console.log(setDynamic_search_data);
  }
  

  const animSearchFoo = () => {
    animSearch.current.classList.toggle('animSearch')
  }
  return (
    <div ref={animSearch} className="Search_wrapper">
      <input
        type="text"
        placeholder="Search"
        onChange={searchProductFoo}
      ></input>
      <img className="Search_icon" src={Search_icon} onClick={animSearchFoo} />
      <div className="result_of_dynamic_search">
        {dynamic_search_data.map((e, i) => (
          <div key={i} className="dynamic_search_item">
            Resultat Num {e.name}
          </div>
        ))}
      </div>
    </div>
  );
}

Search.propTypes = {}

export default Search