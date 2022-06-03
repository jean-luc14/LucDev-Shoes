import React, { useState, useEffect } from "react";
import PriceFilter from "./PriceFilter";
import ColorFilter from "./ColorFilter";
import CategoryFilter from "./CategoryFilter";

const Filter = ({
  searchPage,
  getColorQuantity,
  getCategoryQuantity,
  searchResults,
  filterByPrice,
  filterByColor,
  filterByCategory,
  putFilterResultsInState,
  slug,
}) => {
  const maxPrice = 400;
  //price filter state
  const [price, setPrice] = useState(maxPrice);

  //Color check state
  const [Black, setBlack] = useState(false);
  const [Brown, setBrown] = useState(false);
  const [Gray, setGray] = useState(false);
  const [Blue, setBlue] = useState(false);
  const [White, setWhite] = useState(false);
  const [Green, setGreen] = useState(false);
  const [Red, setRed] = useState(false);
  const [Auburn, setAuburn] = useState(false);
  const [Orange, setOrange] = useState(false);
  const [Yellow, setYellow] = useState(false);
  const [Coffee, setCoffee] = useState(false);
  const [Golden, setGolden] = useState(false);
  const [Wine, setWine] = useState(false);
  const [Khaki, setKhaki] = useState(false);
  const [Ivory, setIvory] = useState(false);
  const [Sapphire, setSapphire] = useState(false);

  //Category check state
  const [Loafers, setLoafers] = useState(false);
  const [Moccasins, setMoccasins] = useState(false);
  const [Oxfords, setOxfords] = useState(false);
  const [DerbyShoes, setDerbyShoes] = useState(false);
  const [Chukkas, setChukkas] = useState(false);
  const [ChelseaStyleBoots, setChelseaStyleBoots] = useState(false);
  const [CasualSlipOnShoes, setCasualSlipOnShoes] = useState(false);
  const [ActiveSneakers, setActiveSneakers] = useState(false);
  const [WalkingShoes, setWalkingShoes] = useState(false);
  const [CasualLaceUpSneakers, setCasualLaceUpSneakers] = useState(false);
  const [CasualSlipOnSneakers, setCasualSlipOnSneakers] = useState(false);
  const [AtHomeShoes, setAtHomeShoes] = useState(false);
  const [Slides, setSlides] = useState(false);
  const [ToePostSandals, setToePostSandals] = useState(false);
  const [ActiveSandals, setActiveSandals] = useState(false);

  const [colorQuantity, setColorQuantity] = useState({
    Black:0,
    Brown:0,
    Gray:0,
    Blue:0,
    White:0,
    Green:0,
    Red:0,
    Auburn:0,
    Orange:0,
    Yellow:0,
    Coffee:0,
    Golden:0,
    Wine:0,
    Khaki:0,
    Ivory:0,
    Sapphire:0,
  }); 

  const [categoryQuantity, setCategoryQuantity] = useState ({
    Loafers: 0,
    Moccasins: 0,
    Oxfords: 0,
    DerbyShoes:0,
    Chukkas:0,
    ChelseaStyleBoots:0,
    CasualSlipOnShoes: 0,
    ActiveSneakers: 0,
    WalkingShoes:0,
    CasualLaceUpSneakers:0,
    CasualSlipOnSneakers:0,
    AtHomeShoes:0,
    Slides: 0,
    ToePostSandals: 0,
    ActiveSandals: 0,
  });
  

  useEffect(() => {
    
    setColorQuantity({
      Black: getColorQuantity("Black", true),
      Brown: getColorQuantity("Brown", true),
      Gray: getColorQuantity("Gray", true),
      Blue: getColorQuantity("Blue", true),
      White: getColorQuantity("White", true),
      Green: getColorQuantity("Green", true),
      Red: getColorQuantity("Red", true),
      Auburn: getColorQuantity("Auburn", true),
      Orange: getColorQuantity("Orange", true),
      Yellow: getColorQuantity("Yellow", true),
      Coffee: getColorQuantity("Coffee", true),
      Golden: getColorQuantity("Golden", true),
      Wine: getColorQuantity("Wine", true),
      Khaki: getColorQuantity("Khaki", true),
      Ivory: getColorQuantity("Ivory", true),
      Sapphire: getColorQuantity("Sapphire", true),
    });

    if (searchPage) {
      setCategoryQuantity({
        Loafers: getCategoryQuantity("loafers", true),
        Moccasins: getCategoryQuantity("moccasins", true),
        Oxfords: getCategoryQuantity("oxfords", true),
        DerbyShoes: getCategoryQuantity("derby-shoes", true),
        Chukkas: getCategoryQuantity("chukkas", true),
        ChelseaStyleBoots: getCategoryQuantity("chelsea-style-boots", true),
        CasualSlipOnShoes: getCategoryQuantity("casual-slip-on-shoes", true),
        ActiveSneakers: getCategoryQuantity("active-sneakers", true),
        WalkingShoes: getCategoryQuantity("walking-shoes", true),
        CasualLaceUpSneakers: getCategoryQuantity(
          "casual-lace-up-sneakers",
          true
        ),
        CasualSlipOnSneakers: getCategoryQuantity(
          "casual-slip-on-sneakers",
          true
        ),
        AtHomeShoes: getCategoryQuantity("at-home-shoes", true),
        Slides: getCategoryQuantity("slides", true),
        ToePostSandals: getCategoryQuantity("toe-post-sandals", true),
        ActiveSandals: getCategoryQuantity("active-sandals", true),
      });
    }
  }, [searchResults]);

  return (
    <div className="products_filter">
      {searchPage === true ? (
        <CategoryFilter
          price={price}
          filterByCategory={filterByCategory}
          filterByPrice={filterByPrice}
          filterByColor={filterByColor}
          putFilterResultsInState={putFilterResultsInState}
          categoryQuantity={categoryQuantity}
          Loafers={Loafers}
          Moccasins={Moccasins}
          Oxfords={Oxfords}
          DerbyShoes={DerbyShoes}
          Chukkas={Chukkas}
          ChelseaStyleBoots={ChelseaStyleBoots}
          CasualSlipOnShoes={CasualSlipOnShoes}
          ActiveSneakers={ActiveSneakers}
          WalkingShoes={WalkingShoes}
          CasualLaceUpSneakers={CasualLaceUpSneakers}
          CasualSlipOnSneakers={CasualSlipOnSneakers}
          AtHomeShoes={AtHomeShoes}
          Slides={Slides}
          ToePostSandals={ToePostSandals}
          ActiveSandals={ActiveSandals}
          Black={Black}
          Brown={Brown}
          Gray={Gray}
          Blue={Blue}
          White={White}
          Green={Green}
          Red={Red}
          Auburn={Auburn}
          Orange={Orange}
          Yellow={Yellow}
          Coffee={Coffee}
          Golden={Golden}
          Wine={Wine}
          Khaki={Khaki}
          Ivory={Ivory}
          Sapphire={Sapphire}
          setLoafers={setLoafers}
          setMoccasins={setMoccasins}
          setOxfords={setOxfords}
          setDerbyShoes={setDerbyShoes}
          setChukkas={setChukkas}
          setChelseaStyleBoots={setChelseaStyleBoots}
          setCasualSlipOnShoes={setCasualSlipOnShoes}
          setActiveSneakers={setActiveSneakers}
          setWalkingShoes={setWalkingShoes}
          setCasualLaceUpSneakers={setCasualLaceUpSneakers}
          setCasualSlipOnSneakers={setCasualSlipOnSneakers}
          setAtHomeShoes={setAtHomeShoes}
          setSlides={setSlides}
          setToePostSandals={setToePostSandals}
          setActiveSandals={setActiveSandals}
        />
      ) : null}
      <PriceFilter
        searchPage={searchPage}
        filterByCategory={filterByCategory}
        filterByPrice={filterByPrice}
        filterByColor={filterByColor}
        putFilterResultsInState={putFilterResultsInState}
        price={price}
        setPrice={setPrice}
        Loafers={Loafers}
        Moccasins={Moccasins}
        Oxfords={Oxfords}
        DerbyShoes={DerbyShoes}
        Chukkas={Chukkas}
        ChelseaStyleBoots={ChelseaStyleBoots}
        CasualSlipOnShoes={CasualSlipOnShoes}
        ActiveSneakers={ActiveSneakers}
        WalkingShoes={WalkingShoes}
        CasualLaceUpSneakers={CasualLaceUpSneakers}
        CasualSlipOnSneakers={CasualSlipOnSneakers}
        AtHomeShoes={AtHomeShoes}
        Slides={Slides}
        ToePostSandals={ToePostSandals}
        ActiveSandals={ActiveSandals}
        Black={Black}
        Brown={Brown}
        Gray={Gray}
        Blue={Blue}
        White={White}
        Green={Green}
        Red={Red}
        Auburn={Auburn}
        Orange={Orange}
        Yellow={Yellow}
        Coffee={Coffee}
        Golden={Golden}
        Wine={Wine}
        Khaki={Khaki}
        Ivory={Ivory}
        Sapphire={Sapphire}
      />
      <ColorFilter
        searchPage={searchPage}
        price={price}
        filterByCategory={filterByCategory}
        filterByPrice={filterByPrice}
        filterByColor={filterByColor}
        putFilterResultsInState={putFilterResultsInState}
        colorQuantity={colorQuantity}
        Loafers={Loafers}
        Moccasins={Moccasins}
        Oxfords={Oxfords}
        DerbyShoes={DerbyShoes}
        Chukkas={Chukkas}
        ChelseaStyleBoots={ChelseaStyleBoots}
        CasualSlipOnShoes={CasualSlipOnShoes}
        ActiveSneakers={ActiveSneakers}
        WalkingShoes={WalkingShoes}
        CasualLaceUpSneakers={CasualLaceUpSneakers}
        CasualSlipOnSneakers={CasualSlipOnSneakers}
        AtHomeShoes={AtHomeShoes}
        Slides={Slides}
        ToePostSandals={ToePostSandals}
        ActiveSandals={ActiveSandals}
        Black={Black}
        Brown={Brown}
        Gray={Gray}
        Blue={Blue}
        White={White}
        Green={Green}
        Red={Red}
        Auburn={Auburn}
        Orange={Orange}
        Yellow={Yellow}
        Coffee={Coffee}
        Golden={Golden}
        Wine={Wine}
        Khaki={Khaki}
        Ivory={Ivory}
        Sapphire={Sapphire}
        setBlack={setBlack}
        setBrown={setBrown}
        setGray={setGray}
        setBlue={setBlue}
        setWhite={setWhite}
        setGreen={setGreen}
        setRed={setRed}
        setAuburn={setAuburn}
        setOrange={setOrange}
        setYellow={setYellow}
        setCoffee={setCoffee}
        setGolden={setGolden}
        setWine={setWine}
        setKhaki={setKhaki}
        setIvory={setIvory}
        setSapphire={setSapphire}
      />
    </div>
  );
};

export default Filter;
