import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import Section, { SectionTitle, SectionBody } from "../components/Sections";
import { searchProducts } from "../Assets/data/ProductData";
import {catalogData} from '../Assets/data/CatalogData'


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
      <div onm className="products_filter_item_price">
        <PriceFilter
          filterByPrice={filterByPrice}
          price={price}
          setPrice={setPrice}
        />
      </div>
      <div className="products_filter_item_color">
        <h2>Filter By Color</h2>
        <div>
          <ul>
            <li>Black {`(${filterByColor("Black")})`}</li>
            <li>Brown {`(${filterByColor("Brown")})`}</li>
            <li>Gray {`(${filterByColor("Gray")})`}</li>
            <li>Blue {`(${filterByColor("Blue")})`}</li>
          </ul>
          <ul>
            <li>White {`(${filterByColor("White")})`}</li>
            <li>Green {`(${filterByColor("Green")})`}</li>
            <li>Red {`(${filterByColor("Red")})`}</li>
            <li>Auburn {`(${filterByColor("Auburn")})`}</li>
          </ul>
          <ul>
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



const PriceFilter = ({ filterByPrice,price,setPrice }) => {
  const maxPrice = 400;

  useEffect(() => {
    const searchResultsBody = document.querySelector(".search_results_body");
    const rowFilterGray = document.querySelector(
      ".products_filter_item_price_child.gray"
    );
    const rowFilterRed = document.querySelector(
      ".products_filter_item_price_child.red"
    );
    let holding = false;
    let rowFilterGrayX;
    let MarginLeft;
    let rowFilterRedWidth;
    let rowFilterGrayWidth;
    let currentPrice;
    rowFilterGray.addEventListener("mousedown", (e) => {
      holding = true;
      rowFilterGrayX = e.clientX;
      const { clientWidth } = document.documentElement;
      // "(clientWidth * 2)/100" is a padding of ".products_filter" in SearchResults.scss
      MarginLeft = (clientWidth * 2) / 100 + searchResultsBody.offsetLeft;
      rowFilterRedWidth = rowFilterGrayX - MarginLeft;
      rowFilterRed.style.width = `${rowFilterRedWidth}px`;

      /*The value of rowFilterGrayWidth is get from the width of
      ".products_filter_item_price_child.gray" in SearchResults.scss*/
      rowFilterGrayWidth = (((clientWidth * 98) / 100) * 28) / 100;
      currentPrice = (rowFilterRedWidth * 457) / rowFilterGrayWidth;
      setPrice(currentPrice.toFixed(2));

      if (currentPrice.toFixed(2) <= 0) {
        setPrice(0);
      }
      if (currentPrice.toFixed(2) >= 394) {
        setPrice(maxPrice);
      }
    });
    rowFilterGray.addEventListener("mousemove", (e) => {
      if (!holding) return;
      const x = e.clientX - MarginLeft;
      const scrolled = x - (rowFilterGrayX - MarginLeft);
      rowFilterRed.style.width = `${rowFilterRedWidth + scrolled}px`;

      currentPrice =
        ((rowFilterRedWidth + scrolled) * 457) / rowFilterGrayWidth;
      setPrice(currentPrice.toFixed(2));

      if (currentPrice.toFixed(2) <= 0) {
        setPrice(0);
      }
      if (currentPrice.toFixed(2) >= 394) {
        setPrice(maxPrice);
      }
    });
    rowFilterGray.addEventListener("mouseup", () => {
      holding = false;
    });
    rowFilterGray.addEventListener("mouseleave", () => {
      holding = false;
    });
    //To filter Products
    filterByPrice(price);
  }, [price]);

  return (
    <>
      <div className="products_filter_item_price_title">
        <h2>Filter By Price</h2>
        <h2>
          $0 - <span>${price}</span>
        </h2>
      </div>
      <div className="products_filter_item_price_child gray">
        <div className="products_filter_item_price_child red">
          <span className="first"></span>
          <span className="last"></span>
        </div>
      </div>
    </>
  );
};

export default SearchResults;