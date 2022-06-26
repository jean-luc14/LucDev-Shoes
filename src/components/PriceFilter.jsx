import React,{useEffect} from 'react'

const PriceFilter = ({
  searchPage,
  filterByPrice,
  filterByCategory,
  filterByColor,
  putFilterResultsInState,
  price,
  setPrice,
  Loafers,
  Moccasins,
  Oxfords,
  DerbyShoes,
  Chukkas,
  ChelseaStyleBoots,
  CasualSlipOnShoes,
  ActiveSneakers,
  WalkingShoes,
  CasualLaceUpSneakers,
  CasualSlipOnSneakers,
  AtHomeShoes,
  Slides,
  ToePostSandals,
  ActiveSandals,
  Black,
  Brown,
  Gray,
  Blue,
  White,
  Green,
  Red,
  Auburn,
  Orange,
  Yellow,
  Coffee,
  Golden,
  Wine,
  Khaki,
  Ivory,
  Sapphire,
}) => {
  const maxPrice = 400;

  useEffect(() => {
    // the class '.search_results_body is in SearchResults.jsx'
    let Body;
    
    if (searchPage) { 
      Body = document.querySelector(".search_results_body");
    } else {
      Body = document.querySelector(".category_body"); 
    }
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
      MarginLeft = (clientWidth * 2) / 100 + Body.offsetLeft;
      rowFilterRedWidth = rowFilterGrayX - MarginLeft;
      rowFilterRed.style.width = `${rowFilterRedWidth}px`;

      /*The value of rowFilterGrayWidth is get from the width of
      ".products_filter_item_price_child.gray" in SearchResults.scss*/
      rowFilterGrayWidth = (((clientWidth * 98) / 100) * 28) / 100;
      currentPrice = (rowFilterRedWidth * 457) / rowFilterGrayWidth;
      setPrice(Number.parseFloat(currentPrice.toFixed(2)));

      if (Number.parseFloat(currentPrice.toFixed(2)) <= 0) {
        setPrice(0);
      }
      if(Number.parseFloat(currentPrice.toFixed(2)) >= 394) {
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
      setPrice(Number.parseFloat(currentPrice.toFixed(2)));

      if (Number.parseFloat(currentPrice.toFixed(2)) <= 0) {
        setPrice(0);
      }
      if (Number.parseFloat(currentPrice.toFixed(2)) >= 394) {
        setPrice(maxPrice);
      }
    });
    rowFilterGray.addEventListener("mouseup", () => {
      holding = false;
    });
    rowFilterGray.addEventListener("mouseleave", () => {
      holding = false;
    });
    if (searchPage) { 
      filterByCategory("loafers", Loafers);
      filterByCategory("moccasins", Moccasins);
      filterByCategory("oxfords", Oxfords);
      filterByCategory("derby-shoes", DerbyShoes);
      filterByCategory("chukkas", Chukkas);
      filterByCategory("chelsea-style-boots", ChelseaStyleBoots);
      filterByCategory("casual-slip-on-shoes", CasualSlipOnShoes);
      filterByCategory("active-sneakers", ActiveSneakers);
      filterByCategory("walking-shoes", WalkingShoes);
      filterByCategory("casual-lace-up-sneakers", CasualLaceUpSneakers);
      filterByCategory("casual-slip-on-sneakers", CasualSlipOnSneakers);
      filterByCategory("at-home-shoes", AtHomeShoes);
      filterByCategory("slides", Slides);
      filterByCategory("toe-post-sandals", ToePostSandals);
      filterByCategory("active-sandals", ActiveSandals);
    }

    filterByPrice(price);

    filterByColor("Black", Black);
    filterByColor("Brown", Brown);
    filterByColor("Gray", Gray);
    filterByColor("Blue", Blue);
    filterByColor("White", White);
    filterByColor("Green", Green);
    filterByColor("Red", Red);
    filterByColor("Auburn", Auburn);
    filterByColor("Orange", Orange);
    filterByColor("Yellow", Yellow);
    filterByColor("Coffee", Coffee);
    filterByColor("Golden", Golden);
    filterByColor("Wine", Wine);
    filterByColor("Khaki", Khaki);
    filterByColor("Ivory", Ivory);
    filterByColor("Sapphire", Sapphire);

    putFilterResultsInState(); 
  }, [price]);

  return (
    <div className="products_filter_item_price">
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
    </div>
  );
};

export default PriceFilter