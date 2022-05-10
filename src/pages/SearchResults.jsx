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
  const [filterByCategoryResultsState, setFilterByCategoryResultsState] = useState([])
  const [filterByPriceResultsState, setFilterByPriceResultsState] = useState([])
  const [filterByColorResultsState, setFilterByColorResultsState] = useState([])

  let allFilterByCategoryResults = [];
  let allFilterByPriceResults = [];
  let allFilterByColorResults = [];

  //func to filter (Delete duplicated products in filters results)  and update filterResults State
  const allFilterFunc = () => {
    let firstAllFilterResults;
    let secondAllFilterResults;

    if (filterByCategoryResultsState.length > 0) {
      if(filterByPriceResultsState.length > 0){
          filterByCategoryResultsState.forEach((item) => {
            firstAllFilterResults = filterByPriceResultsState.filter(
              (e) => (e.catalogSlug === item.catalogSlug && e.id === item.id) === true ? false : true
          );
            firstAllFilterResults.forEach((item) => {
              secondAllFilterResults = filterByColorResultsState.filter(
                (e) => e.catalogSlug !== item.catalogSlug && e.id !== item.id
              );
            });
        })
      }
    }
    
  }
  
  
  //filter Products By Category
  const filterByCategory = (productCategory,categoryCheck) => {
    let waist;
    let filterByCategoryResults;
    //Add Products by category
    if (categoryCheck) {
      filterByCategoryResults = searchResults.filter(
        (e) => e.catalogSlug === productCategory
      );
      waist = allFilterByCategoryResults.push(...filterByCategoryResults);
    }
    //Delete Products by color
    else {
      filterByCategoryResults = allFilterByCategoryResults.filter(
        (e) => e.catalogSlug !== productCategory
      );
      allFilterByCategoryResults = [...filterByCategoryResults];
    }
    setFilterByCategoryResultsState(allFilterByCategoryResults);
    return filterByCategoryResults.length;
  }


  //filter Products By Price
  const filterByPrice = (productPrice) => {
    let filterByPriceResults;
    filterByPriceResults = searchResults.filter((e) => parseFloat(e.price) <= productPrice);
    allFilterByPriceResults = [...filterByPriceResults] 
    setFilterByPriceResultsState(allFilterByPriceResults);
  }


  //filter Products By Color
  const filterByColor = (productColor, colorCheck) => {
    let waist;
    let filterByColorResults;
    //Add Products by color
    if(colorCheck){
      filterByColorResults = searchResults.filter((item) =>
        item.color.some(e =>
          e.name.toLowerCase().replace(/\s/g, "").includes(productColor.toLowerCase().replace(/\s/g, ""))
        )
      );
      waist = allFilterByColorResults.push(...filterByColorResults);
    }
    //Delete Products by color
    else {
      filterByColorResults = allFilterByColorResults.filter((item) =>
        item.color.some((e) =>
          (e.name
            .toLowerCase()
            .replace(/\s/g, "")
            .includes(productColor.toLowerCase().replace(/\s/g, ""))) === true ? false : true
        )
      );
      allFilterByColorResults = [...filterByColorResults];
    }
    setFilterByColorResultsState(allFilterByColorResults)
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
                <h1> Oops! No Results</h1>
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
      <ColorFilter filterByColor={filterByColor} />
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

const ColorFilter = ({ filterByColor }) => {

  const [colorQuantity, setColorQuantity] = useState({
    Black:filterByColor("Black",true),
    Brown :filterByColor("Brown",true),
    Gray :filterByColor("Gray",true),
    Blue :filterByColor("Blue",true),
    White :filterByColor("White",true),
    Green :filterByColor("Green",true),
    Red :filterByColor("Red",true),
    Auburn:filterByColor("Auburn",true),
    Orange:filterByColor("Orange",true),
    Yellow:filterByColor("Yellow",true),
    Coffee:filterByColor("Coffee",true),
    Golden:filterByColor("Golden",true),
    Wine :filterByColor("Wine",true),
    Khaki :filterByColor("Khaki",true),
    Ivory :filterByColor("Ivory",true),
    Sapphire:filterByColor("Sapphire",true),
  })
  
  const [Black, setBlack] = useState(true);
  const  [Brown, setBrown] = useState(true)
  const [Gray, setGray] = useState(true);
  const [Blue, setBlue] = useState(true);
  const [White, setWhite] = useState(true);
  const [Green, setGreen] = useState(true);
  const [Red, setRed] = useState(true);
  const [Auburn, setAuburn] = useState(true);
  const [Orange, setOrange] = useState(true);
  const [Yellow, setYellow] = useState(true);
  const  [Coffee, setCoffee] = useState(true);
  const [Golden, setGolden] = useState(true);
  const [Wine, setWine] = useState(true);
  const [Khaki, setKhaki] = useState(true);
  const [Ivory, setIvory] = useState(true);
  const [Sapphire, setSapphire] = useState(true);
  
  useEffect(() => {

  }, [
    Black, Brown, Gray, Blue, White, Green, Red, Auburn, Orange, Yellow, Coffee, Golden, Wine, Khaki, Ivory, Sapphire,
  ]);
  
  
  return (
    <div className="products_filter_item_color">
      <h2>Filter By Color</h2>
      <div>
        <ul>
          <li className={`${colorQuantity.Black > 0 ? "active" : ""}`}
            onClick={() => setBlack(!Black)}
          >
            <input
              disabled={colorQuantity.Black > 0 ? false : true}
              type="checkbox"
              checked={Black}
            ></input>
            Black ({colorQuantity.Black})
          </li>
          <li className={`${colorQuantity.Brown > 0 ? "active" : ""}`}
            onClick={() => setBrown(!Brown)}
          >
            <input
              disabled={colorQuantity.Brown > 0 ? false : true}
              type="checkbox"
              checked={Brown}
              ></input>
              Brown ({colorQuantity.Brown})
          </li>
          <li className={`${colorQuantity.Gray > 0 ? "active" : ""}`}
            onClick={() => setGray(!Gray)}
          >
            <input
              disabled={colorQuantity.Gray > 0 ? false : true}
              type="checkbox"
              checked={Gray}
            ></input>
            Gray ({colorQuantity.Gray})
          </li>
          <li className={`${colorQuantity.Blue > 0 ? "active" : ""}`}
              onClick={() => setBlue(!Blue)}
          >
            <input
              disabled={colorQuantity.Blue > 0 ? false : true}
              type="checkbox"
              checked={Blue}
            ></input>
            Blue ({colorQuantity.Blue})
          </li>
          <li className={`${colorQuantity.White > 0 ? "active" : ""}`}
              onClick={() => setWhite(!White)}
          >
            <input
              disabled={colorQuantity.White > 0 ? false : true}
              type="checkbox"
              checked={White}
            ></input>
            White ({colorQuantity.White})
          </li>
          <li className={`${colorQuantity.Green > 0 ? "active" : ""}`}
              onClick={() => setGreen(!Green)}
          >
            <input
              disabled={colorQuantity.Green > 0 ? false : true}
              type="checkbox"
              checked={Green}
            ></input>
            Green ({colorQuantity.Green})
          </li>
        </ul>
        <ul>
          <li className={`${colorQuantity.Red > 0 ? "active" : ""}`}
              onClick={() => setRed(!Red)}
          >
            <input
              disabled={colorQuantity.Red > 0 ? false : true}
              type="checkbox"
              checked={Red}
            ></input>
            Red ({colorQuantity.Red})
          </li>
          <li className={`${colorQuantity.Auburn > 0 ? "active" : ""}`}
              onClick={() => setAuburn(!Auburn)}
          >
            <input
              disabled={colorQuantity.Auburn > 0 ? false : true}
              type="checkbox"
              checked={Auburn}
            ></input>
            Auburn ({colorQuantity.Auburn})
          </li>
          <li className={`${colorQuantity.Orange > 0 ? "active" : ""}`}
              onClick={() => setOrange(!Orange)}
          >
            <input
              disabled={colorQuantity.Orange > 0 ? false : true}
              type="checkbox"
              checked={Orange}
            ></input>
            Orange ({colorQuantity.Orange})
          </li>
          <li className={`${colorQuantity.Yellow > 0 ? "active" : ""}`}
              onClick={() => setYellow(!Yellow)}
          >
            <input
              disabled={colorQuantity.Yellow > 0 ? false : true}
              type="checkbox"
              checked={Yellow}
            ></input>
            Yellow ({colorQuantity.Yellow})
          </li>
          <li className={`${colorQuantity.Coffee > 0 ? "active" : ""}`}
              onClick={() => setCoffee(!Coffee)}
          >
            <input
              disabled={colorQuantity.Coffee > 0 ? false : true}
              type="checkbox"
              checked={Coffee}
            ></input>
            Coffee ({colorQuantity.Coffee})
          </li>
          <li className={`${colorQuantity.Golden > 0 ? "active" : ""}`}
              onClick={() => setGolden(!Golden)}
          >
            <input
              disabled={colorQuantity.Golden > 0 ? false : true}
              type="checkbox"
              checked={Golden}
            ></input>
            Golden ({colorQuantity.Golden})
          </li>
        </ul>
        <ul>
          <li className={`${colorQuantity.Wine > 0 ? "active" : ""}`}
              onClick={() => setWine(!Wine)}
          >
            <input
              disabled={colorQuantity.Wine > 0 ? false : true}
              type="checkbox"
              checked={Wine}
            ></input>
            Wine ({colorQuantity.Wine})
          </li>
          <li className={`${colorQuantity.Khaki > 0 ? "active" : ""}`}
              onClick={() => setKhaki(!Khaki)}
          >
            <input
              disabled={colorQuantity.Khaki > 0 ? false : true}
              type="checkbox"
              checked={Khaki}
            ></input>
            Khaki ({colorQuantity.Khaki})
          </li>
          <li className={`${colorQuantity.Ivory > 0 ? "active" : ""}`}
              onClick={() => setIvory(!Ivory)}
          >
            <input
              disabled={colorQuantity.Ivory > 0 ? false : true}
              type="checkbox"
              checked={Ivory}
            ></input>
            Ivory ({colorQuantity.Ivory})
          </li>
          <li className={`${colorQuantity.Sapphire > 0 ? "active" : ""}`}
              onClick={() => setSapphire(!Sapphire)}
          >
            <input
              disabled={colorQuantity.Sapphire > 0 ? false : true}
              type="checkbox"
              checked={Sapphire}
            ></input>
            Sapphire ({colorQuantity.Sapphire})
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchResults;