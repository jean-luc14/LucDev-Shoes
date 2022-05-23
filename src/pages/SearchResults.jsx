import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import NewAndFavorite from "../components/NewAndFavorite";
import Section, { SectionTitle, SectionBody } from "../components/Sections";
import { searchProducts } from "../Assets/data/ProductData";
import Filter from "../components/Filter";

const SearchResults = () => {
  //params and dispatch
  let params = useParams();

  //All filter state
  const [searchResults, setSearchResults] = useState(
    searchProducts(params.slug)
  );
  const [filterResults, setFilterResults] = useState(searchResults);

  let allFilterByCategoryResults = [];
  let allFilterByCategoryResults2 = [];
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

  //filter Products By Category and push it in allFilterByCategoryResults variable
  const filterByCategory = (productCategory, categoryCheck) => {
    let filterByCategoryResults = [];

    if (categoryCheck) {
      filterByCategoryResults = searchResults.filter(
        (item) => item.catalogSlug === productCategory
      );
      allFilterByCategoryResults.push(...filterByCategoryResults);
    }
  };

  //filter Products By Price and push it in allFilterByPriceResults variable
  const filterByPrice = (price) => {
    allFilterByPriceResults = allFilterByCategoryResults.filter(
      (e) => e.price < price
    );
  };

  //filter Products By Color and push it in allFilterByColorResults variable
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
  
  // update all filter in filter results state to show in DOM
  const putFilterResultsInState = () => {
    let arr = [...new Set(allFilterByColorResults)];
    setFilterResults(arr);
  };

  useEffect(() => {
    setSearchResults(searchProducts(params.slug));
    setFilterResults(searchProducts(params.slug));
  }, [params.slug]);

  return (
    <div className="search_results">
      <Section>
        <SectionTitle
          ProductCards={filterResults}
          instruction={
            <div className="color_instruction">
              <span className='triangle'></span>
              Each product has different colors, please click on the button to
              buy to see the other colors of the product{" "}
            </div>
          }
        >
          {`Search Results (${filterResults.length})`}
        </SectionTitle>
        <SectionBody>
          <div className="search_results_body">
            <Filter
              getColorQuantity={getColorQuantity}
              getCategoryQuantity={getCategoryQuantity}
              searchResults={searchResults}
              filterByPrice={filterByPrice}
              filterByColor={filterByColor}
              filterByCategory={filterByCategory}
              putFilterResultsInState={putFilterResultsInState}
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
                    (red) product color If there is no active category or
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
