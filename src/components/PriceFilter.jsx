import React,{useEffect} from 'react'

const PriceFilter = ({ filterByPrice, price, setPrice }) => {
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
    <div onm className="products_filter_item_price">
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