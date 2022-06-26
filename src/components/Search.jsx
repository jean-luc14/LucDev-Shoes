import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Search_icon from "../Assets/icons/search_icon.png";
import { searchProducts } from "../Assets/data/ProductData";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../redux/search/ActiveSearchSlice";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const Search = () => {
  const [dynamic_search_data, setDynamic_search_data] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const activeSearch = useSelector((state) => state.search.value);

  const inputElement = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //put input value to state
  const searchProductFoo = (e) => {
    setInputValue(e.target.value);
  };

  //update the value of search in redux store to active search input and oder
  const animSearchFoo = () => {
    dispatch(set(!activeSearch));
    inputElement.current.focus();
  };

  // go to product page
  const goToProductPage = (category, id) => {
    navigate(`/category=${category}&id=${id}`);
    setInputValue("");
    animSearchFoo();
  };

  //Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search=${inputValue}`);
    setInputValue("");
    animSearchFoo();
  };
  useEffect(() => {
    //get all products from firestore which have a search value and put their in state
    const getAllProducts = async (value) => {
      const querySnapshot = await getDocs(collection(db, "productData"));
      let products = [];
      querySnapshot.forEach((doc) => {
        products.push(doc.data());
      });
      const productResults = searchProducts(value, products);

      setDynamic_search_data(productResults);
      return productResults;
    };
    getAllProducts(inputValue);
  }, [inputValue]);

  return (
    <div className={`search_wrapper ${activeSearch ? "animSearch" : ""}`}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          className="search_input"
          value={inputValue}
          onInput={searchProductFoo}
          ref={inputElement}
        ></input>
        <img
          className="search_icon"
          src={Search_icon}
          onClick={animSearchFoo}
        />
        {(inputValue.length > 2) & activeSearch ? (
          <>
            <div className="dynamic_search_results">
              <span
                className={`${
                  dynamic_search_data.length > 0 ? "triangle" : ""
                }`}
              ></span>
              {dynamic_search_data.map((e, i) => (
                <div
                  key={i}
                  className="dynamic_search_item"
                  onClick={() => goToProductPage(e.category, e.id)}
                >
                  <div className="dynamic_search_item_img">
                    <img src={e.color[0].img} alt={e.name} />
                  </div>
                  <div className="dynamic_search_item_content">
                    <p className="dynamic_search_item_content_price">
                      US ${e.price}
                    </p>
                    <p className="dynamic_search_item_content_category">
                      {e.category}
                    </p>
                    <p className="dynamic_search_item_content_name">{e.name}</p>
                  </div>
                </div>
              ))}
              {dynamic_search_data.length > 0 ? (
                <input type="submit" value="Plus"></input>
              ) : null}
            </div>
          </>
        ) : null}
      </form>
    </div>
  );
};
export default Search;
