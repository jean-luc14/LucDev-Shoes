import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import Section, { SectionTitle, SectionBody } from "../components/Sections";
import { searchProducts } from "../Assets/data/ProductData";
import {catalogData} from '../Assets/data/CatalogData'
import PriceFilter from '../components/PriceFilter'


const SearchResults = () => {

  const maxPrice = 400;
  
  //params
  let params = useParams();

  //state
  const [price, setPrice] = useState(maxPrice);
  const [searchResults, setSearchResults] = useState(searchProducts(params.slug));
  const [filterResults, setFilterResults] = useState(searchResults);

  //filter Products By Category
  const filterByCategory = (productCategory) => {
    let filterByCategoryResults;
    filterByCategoryResults = searchResults.filter( e => e.catalogSlug === productCategory );
    
    
    return filterByCategoryResults.length;
  }

  //filter Products By Price
  const filterByPrice = (productPrice) => {
    let filterByPriceResults;
    filterByPriceResults = searchResults.filter((e) => parseFloat(e.price) <= productPrice);
    setFilterResults(filterByPriceResults);
  }

  //filter Products By Color
  const filterByColor = (productColor) => {
    let filterByColorResults;
    filterByColorResults = searchResults.filter((item) =>
      item.color.some((e) => e.name.toLowerCase() === productColor.toLowerCase())
    );
    
    
    return filterByColorResults.length;
  }

  useEffect(() => {
    setSearchResults(searchProducts(params.slug));
  }, [params.slug]);
  

  return (
    <div className="search_results">
      <Section>
        <SectionTitle ProductCards={filterResults}>
          {`Search Results (${filterResults.length})`}
        </SectionTitle>
        <SectionBody>
          <div className="search_results_body">
            <Filter
              filterByPrice={filterByPrice}
              searchResults={searchResults}
              price={price}
              setPrice={setPrice}
              filterByColor={filterByColor}
              filterByCategory={filterByCategory}
            />
            <div className="search_results_body_child">
              {filterResults.length > 0 ? (
                <Grid searchResults={true}>
                  {filterResults.map((e, i) => (
                    <ProductCard productProps={e} key={i} />
                  ))}
                </Grid>
              ) : (
                <h1> Oups! No Results</h1>
              )}
            </div>
          </div>
        </SectionBody>
      </Section>
    </div>
  );
}

const Filter = ({
  filterByPrice,
  searchResults,
  price,
  setPrice,
  filterByColor,
  filterByCategory,
}) => {
  useEffect(() => {
    filterByPrice(price);
  }, [searchResults]);

  return (
    <div className="products_filter">
      <div className="products_filter_item_category">
        <h2>Filter By Categories</h2>
        <ul>
          {catalogData.map((e, index) => (
            <li key={index}>
              {e.display} {`(${filterByCategory(e.path)})`}
            </li>
          ))}
        </ul>
      </div>
      <PriceFilter
        filterByPrice={filterByPrice}
        price={price}
        setPrice={setPrice}
      />
      <div className="products_filter_item_color">
        <h2>Filter By Color</h2>
        <div>
          <ul>
            <li>
              <input type="checkbox" checked={true}></input>
              Black {`(${filterByColor("Black")})`}
            </li>
            <li>Brown {`(${filterByColor("Brown")})`}</li>
            <li>Gray {`(${filterByColor("Gray")})`}</li>
            <li>Blue {`(${filterByColor("Blue")})`}</li>
            <li>White {`(${filterByColor("White")})`}</li>
            <li>Green {`(${filterByColor("Green")})`}</li>
          </ul>
          <ul>
            <li>Red {`(${filterByColor("Red")})`}</li>
            <li>Auburn {`(${filterByColor("Auburn")})`}</li>
            <li>Orange {`(${filterByColor("Orange")})`}</li>
            <li>Yellow {`(${filterByColor("Yellow")})`}</li>
            <li>Coffee {`(${filterByColor("Coffee")})`}</li>
            <li>Golden {`(${filterByColor("Golden")})`}</li>
          </ul>
          <ul>
            <li>Wine {`(${filterByColor("Wine")})`}</li>
            <li>Khaki {`(${filterByColor("Khaki")})`}</li>
            <li>Ivory {`(${filterByColor("Ivory")})`}</li>
            <li>Sapphire {`(${filterByColor("Sapphire")})`}</li>
          </ul>
        </div>
      </div>
      <div className="products_filter_item_search">
        <input
          type="search"
          name="search"
          placeholder="Search Products..."
        ></input>
        <input type="button" value="Search"></input>
      </div>
    </div>
  );
};

export default SearchResults;