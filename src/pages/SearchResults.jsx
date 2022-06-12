import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import NewAndFavorite from "../components/NewAndFavorite";
import Section, { SectionTitle, SectionBody } from "../components/Sections";
import { searchProducts } from "../Assets/data/ProductData";
import Filter from "../components/Filter";

const SearchResults = () => {
  const [activeFilterBtn, setActiveFilterBtn] = useState(false);
  //params and dispatch
  let params = useParams();
  let value = params.value;
  //All filter state
  const [searchResults, setSearchResults] = useState(
    searchProducts(params.value)
  );
  const [filterResults, setFilterResults] = useState(searchResults);

  let allFilterByCategoryResults = [];
  let allFilterByPriceResults = [];
  let allFilterByColorResults = [];

  //get quantity of each product category
  const getCategoryQuantity = (productCategory, categoryCheck) => {
    let filterByCategoryResults = [];

    if (categoryCheck) {
      filterByCategoryResults = searchResults.filter(
        (item) => item.catalogSlug === productCategory
      );
    }
    return filterByCategoryResults.length;
  };

  //get quantity of each product color
  const getColorQuantity = (productColor, colorCheck) => {
    let filterByColorResults = [];

    if (colorCheck) {
      filterByColorResults = searchResults.filter((item) =>
        item.color.some((e) =>
          e.name
            .toLowerCase()
            .replace(/\s/g, "")
            .includes(productColor.toLowerCase().replace(/\s/g, ""))
        )
      );
    }
    return filterByColorResults.length;
  };

  /*filter searchResults Products By Category ( the
    filter result of each Category is push to allFilterByCategoryResults because,
    this function is called by all category in CategoryFilter component  
  )*/
  const filterByCategory = (productCategory, categoryCheck) => {
    let filterByCategoryResults = [];

    if (categoryCheck) {
      filterByCategoryResults = searchResults.filter(
        (item) => item.catalogSlug === productCategory
      );
      allFilterByCategoryResults.push(...filterByCategoryResults);
    }
  };

  /*filter allFilterByCategoryResults Products By Price
   and push it to allFilterByPriceResults */
  const filterByPrice = (price) => {
    allFilterByPriceResults = allFilterByCategoryResults.filter(
      (e) => e.price < price
    );
  };

  /*filter allFilterByPriceResults Products By Color (the
    filter result of each color is push to allFilterByColorResults because,
    this function is called by all color in ColorFilter component )*/
  const filterByColor = (productColor, colorCheck) => {
    let filterByColorResults = [];

    if (colorCheck) {
      filterByColorResults = allFilterByPriceResults.filter((item) =>
        item.color.some((e) =>
          e.name
            .toLowerCase()
            .replace(/\s/g, "")
            .includes(productColor.toLowerCase().replace(/\s/g, ""))
        )
      );

      allFilterByColorResults.push(...filterByColorResults);
    }
  };

  // push all filter results to filterResults state
  const putFilterResultsInState = () => {
    let arr = [...new Set(allFilterByColorResults)];
    setFilterResults(arr);
  };

  useEffect(() => {
    setSearchResults(searchProducts(value));
    setFilterResults(searchProducts(value));
  }, [value]);

  return (
    <div className="search_results">
      <Section>
        <SectionTitle
          ProductCards={filterResults}
          instruction={
            <div className="color_instruction">
              <span className="triangle"></span>
              Each product has different colors, please click on the buy button
              to see the other colors of the product{" "}
            </div>
          }
        >
          {`Search Results (${filterResults.length})`}
        </SectionTitle>
        <SectionBody>
          <div className="search_results_body">
            <div className="filter_btn_wrapper">
              <button
                className="filter_btn"
                onClick={() => {
                  setActiveFilterBtn(!activeFilterBtn);
                }}
              >
                Filter{" "}
              </button>
              <div
                className={`filter_btn_child ${
                  activeFilterBtn ? "active" : ""
                }`}
              >
                <Filter
                  searchPage={true}
                  getColorQuantity={getColorQuantity}
                  getCategoryQuantity={getCategoryQuantity}
                  searchResults={searchResults}
                  filterByPrice={filterByPrice}
                  filterByColor={filterByColor}
                  filterByCategory={filterByCategory}
                  putFilterResultsInState={putFilterResultsInState}
                  value={value}
                />
              </div>
              {activeFilterBtn ? (
                <div
                  className="filter_btn_wrapper_bg"
                  onClick={() => {
                    setActiveFilterBtn(!activeFilterBtn);
                  }}
                ></div>
              ) : null}
            </div>
            <Filter
              searchPage={true}
              getColorQuantity={getColorQuantity}
              getCategoryQuantity={getCategoryQuantity}
              searchResults={searchResults}
              filterByPrice={filterByPrice}
              filterByColor={filterByColor}
              filterByCategory={filterByCategory}
              putFilterResultsInState={putFilterResultsInState}
              value={value}
            />
            <div className="search_results_body_child">
              {filterResults.length > 0 ? (
                <Grid searchResults={true}>
                  {filterResults.map((e, i) => (
                    <ProductCard productProps={e} key={i} />
                  ))}
                </Grid>
              ) : (
                <div className="no_results">
                  <h1> Oops! No Results </h1>
                  <div>
                    <span className="triangle"></span>
                    Please select at least one product category and one active
                    (red) product color. If there is no active category or
                    product color, please search for other keywords
                  </div>
                </div>
              )}
            </div>
          </div>
        </SectionBody>
      </Section>
      <NewAndFavorite />
    </div>
  );
};
export default SearchResults;
