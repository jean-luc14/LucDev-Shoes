import React, { useState, useEffect } from "react";

const ColorFilter = ({
  filterByColor,
  putAllFilterInState,
  colorQuantity,
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
  setBlack,
  setBrown,
  setGray,
  setBlue,
  setWhite,
  setGreen,
  setRed,
  setAuburn,
  setOrange,
  setYellow,
  setCoffee,
  setGolden,
  setWine,
  setKhaki,
  setIvory,
  setSapphire,
}) => {
  useEffect(() => {
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
    putAllFilterInState();
  }, [
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
  ]);

  return (
    <div className="products_filter_item_color">
      <h2>Filter By Color</h2>
      <div>
        <ul>
          <li
            className={`${colorQuantity.Black > 0 ? "active" : ""}`}
            onClick={() => {
              setBlack(!Black);
            }}
          >
            <input
              disabled={colorQuantity.Black > 0 ? false : true}
              type="checkbox"
              checked={Black}
            ></input>
            Black ({colorQuantity.Black})
          </li>
          <li
            className={`${colorQuantity.Brown > 0 ? "active" : ""}`}
            onClick={() => {
              setBrown(!Brown);
            }}
          >
            <input
              disabled={colorQuantity.Brown > 0 ? false : true}
              type="checkbox"
              checked={Brown}
            ></input>
            Brown ({colorQuantity.Brown})
          </li>
          <li
            className={`${colorQuantity.Gray > 0 ? "active" : ""}`}
            onClick={() => {
              setGray(!Gray);
            }}
          >
            <input
              disabled={colorQuantity.Gray > 0 ? false : true}
              type="checkbox"
              checked={Gray}
            ></input>
            Gray ({colorQuantity.Gray})
          </li>
          <li
            className={`${colorQuantity.Blue > 0 ? "active" : ""}`}
            onClick={() => {
              setBlue(!Blue);
            }}
          >
            <input
              disabled={colorQuantity.Blue > 0 ? false : true}
              type="checkbox"
              checked={Blue}
            ></input>
            Blue ({colorQuantity.Blue})
          </li>
          <li
            className={`${colorQuantity.White > 0 ? "active" : ""}`}
            onClick={() => {
              setWhite(!White);
            }}
          >
            <input
              disabled={colorQuantity.White > 0 ? false : true}
              type="checkbox"
              checked={White}
            ></input>
            White ({colorQuantity.White})
          </li>
          <li
            className={`${colorQuantity.Green > 0 ? "active" : ""}`}
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
          <li
            className={`${colorQuantity.Red > 0 ? "active" : ""}`}
            onClick={() => setRed(!Red)}
          >
            <input
              disabled={colorQuantity.Red > 0 ? false : true}
              type="checkbox"
              checked={Red}
            ></input>
            Red ({colorQuantity.Red})
          </li>
          <li
            className={`${colorQuantity.Auburn > 0 ? "active" : ""}`}
            onClick={() => setAuburn(!Auburn)}
          >
            <input
              disabled={colorQuantity.Auburn > 0 ? false : true}
              type="checkbox"
              checked={Auburn}
            ></input>
            Auburn ({colorQuantity.Auburn})
          </li>
          <li
            className={`${colorQuantity.Orange > 0 ? "active" : ""}`}
            onClick={() => setOrange(!Orange)}
          >
            <input
              disabled={colorQuantity.Orange > 0 ? false : true}
              type="checkbox"
              checked={Orange}
            ></input>
            Orange ({colorQuantity.Orange})
          </li>
          <li
            className={`${colorQuantity.Yellow > 0 ? "active" : ""}`}
            onClick={() => setYellow(!Yellow)}
          >
            <input
              disabled={colorQuantity.Yellow > 0 ? false : true}
              type="checkbox"
              checked={Yellow}
            ></input>
            Yellow ({colorQuantity.Yellow})
          </li>
          <li
            className={`${colorQuantity.Coffee > 0 ? "active" : ""}`}
            onClick={() => setCoffee(!Coffee)}
          >
            <input
              disabled={colorQuantity.Coffee > 0 ? false : true}
              type="checkbox"
              checked={Coffee}
            ></input>
            Coffee ({colorQuantity.Coffee})
          </li>
          <li
            className={`${colorQuantity.Golden > 0 ? "active" : ""}`}
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
          <li
            className={`${colorQuantity.Wine > 0 ? "active" : ""}`}
            onClick={() => setWine(!Wine)}
          >
            <input
              disabled={colorQuantity.Wine > 0 ? false : true}
              type="checkbox"
              checked={Wine}
            ></input>
            Wine ({colorQuantity.Wine})
          </li>
          <li
            className={`${colorQuantity.Khaki > 0 ? "active" : ""}`}
            onClick={() => setKhaki(!Khaki)}
          >
            <input
              disabled={colorQuantity.Khaki > 0 ? false : true}
              type="checkbox"
              checked={Khaki}
            ></input>
            Khaki ({colorQuantity.Khaki})
          </li>
          <li
            className={`${colorQuantity.Ivory > 0 ? "active" : ""}`}
            onClick={() => setIvory(!Ivory)}
          >
            <input
              disabled={colorQuantity.Ivory > 0 ? false : true}
              type="checkbox"
              checked={Ivory}
            ></input>
            Ivory ({colorQuantity.Ivory})
          </li>
          <li
            className={`${colorQuantity.Sapphire > 0 ? "active" : ""}`}
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

export default ColorFilter;
