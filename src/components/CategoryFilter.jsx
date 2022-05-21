import React, { useState, useEffect } from "react";

const CategoryFilter = ({
  filterByCategory,
  putAllFilterInState,
  categoryQuantity,
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
  setLoafers,
  setMoccasins,
  setOxfords,
  setDerbyShoes,
  setChukkas,
  setChelseaStyleBoots,
  setCasualSlipOnShoes,
  setActiveSneakers,
  setWalkingShoes,
  setCasualLaceUpSneakers,
  setCasualSlipOnSneakers,
  setAtHomeShoes,
  setSlides,
  setToePostSandals,
  setActiveSandals,
}) => {
  useEffect(() => {
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
    putAllFilterInState()
  }, [
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
  ]);

  return (
    <div className="products_filter_item_category">
      <h2>Filter By Categories</h2>
      <ul>
        <li
          className={`${categoryQuantity.Loafers > 0 ? "active" : ""}`}
          onClick={() => setLoafers(!Loafers)}
        >
          <input
            disabled={categoryQuantity.Loafers > 0 ? false : true}
            type="checkbox"
            checked={Loafers}
          ></input>
          Loafers ({categoryQuantity.Loafers})
        </li>
        <li
          className={`${categoryQuantity.Moccasins > 0 ? "active" : ""}`}
          onClick={() => setMoccasins(!Moccasins)}
        >
          <input
            disabled={categoryQuantity.Moccasins > 0 ? false : true}
            type="checkbox"
            checked={Moccasins}
          ></input>
          Moccasins ({categoryQuantity.Moccasins})
        </li>
        <li
          className={`${categoryQuantity.Oxfords > 0 ? "active" : ""}`}
          onClick={() => setOxfords(!Oxfords)}
        >
          <input
            disabled={categoryQuantity.Oxfords > 0 ? false : true}
            type="checkbox"
            checked={Oxfords}
          ></input>
          Oxfords ({categoryQuantity.Oxfords})
        </li>
        <li
          className={`${categoryQuantity.DerbyShoes > 0 ? "active" : ""}`}
          onClick={() => setDerbyShoes(!DerbyShoes)}
        >
          <input
            disabled={categoryQuantity.DerbyShoes > 0 ? false : true}
            type="checkbox"
            checked={DerbyShoes}
          ></input>
          Derby Shoes ({categoryQuantity.DerbyShoes})
        </li>
        <li
          className={`${categoryQuantity.Chukkas > 0 ? "active" : ""}`}
          onClick={() => setChukkas(!Chukkas)}
        >
          <input
            disabled={categoryQuantity.Chukkas > 0 ? false : true}
            type="checkbox"
            checked={Chukkas}
          ></input>
          Chukkas ({categoryQuantity.Chukkas})
        </li>
        <li
          className={`${
            categoryQuantity.ChelseaStyleBoots > 0 ? "active" : ""
          }`}
          onClick={() => setChelseaStyleBoots(!ChelseaStyleBoots)}
        >
          <input
            disabled={categoryQuantity.ChelseaStyleBoots > 0 ? false : true}
            type="checkbox"
            checked={ChelseaStyleBoots}
          ></input>
          Chelsea Style Boots ({categoryQuantity.ChelseaStyleBoots})
        </li>
        <li
          className={`${
            categoryQuantity.CasualSlipOnShoes > 0 ? "active" : ""
          }`}
          onClick={() => setCasualSlipOnShoes(!CasualSlipOnShoes)}
        >
          <input
            disabled={categoryQuantity.CasualSlipOnShoes > 0 ? false : true}
            type="checkbox"
            checked={CasualSlipOnShoes}
          ></input>
          Casual Slip-on Shoes ({categoryQuantity.CasualSlipOnShoes})
        </li>
        <li
          className={`${categoryQuantity.ActiveSneakers > 0 ? "active" : ""}`}
          onClick={() => setActiveSneakers(!ActiveSneakers)}
        >
          <input
            disabled={categoryQuantity.ActiveSneakers > 0 ? false : true}
            type="checkbox"
            checked={ActiveSneakers}
          ></input>
          Active Sneakers ({categoryQuantity.ActiveSneakers})
        </li>
        <li
          className={`${categoryQuantity.WalkingShoes > 0 ? "active" : ""}`}
          onClick={() => setWalkingShoes(!WalkingShoes)}
        >
          <input
            disabled={categoryQuantity.WalkingShoes > 0 ? false : true}
            type="checkbox"
            checked={WalkingShoes}
          ></input>
          Walking Shoes ({categoryQuantity.WalkingShoes})
        </li>
        <li
          className={`${
            categoryQuantity.CasualLaceUpSneakers > 0 ? "active" : ""
          }`}
          onClick={() => setCasualLaceUpSneakers(!CasualLaceUpSneakers)}
        >
          <input
            disabled={categoryQuantity.CasualLaceUpSneakers > 0 ? false : true}
            type="checkbox"
            checked={CasualLaceUpSneakers}
          ></input>
          Casual Lace-up Sneakers ({categoryQuantity.CasualLaceUpSneakers})
        </li>
        <li
          className={`${
            categoryQuantity.CasualSlipOnSneakers > 0 ? "active" : ""
          }`}
          onClick={() => setCasualSlipOnSneakers(!CasualSlipOnSneakers)}
        >
          <input
            disabled={categoryQuantity.CasualSlipOnSneakers > 0 ? false : true}
            type="checkbox"
            checked={CasualSlipOnSneakers}
          ></input>
          Casual Slip-on Sneakers ({categoryQuantity.CasualSlipOnSneakers})
        </li>
        <li
          className={`${categoryQuantity.AtHomeShoes > 0 ? "active" : ""}`}
          onClick={() => setAtHomeShoes(!AtHomeShoes)}
        >
          <input
            disabled={categoryQuantity.AtHomeShoes > 0 ? false : true}
            type="checkbox"
            checked={AtHomeShoes}
          ></input>
          At Home Shoes ({categoryQuantity.AtHomeShoes})
        </li>
        <li
          className={`${categoryQuantity.Slides > 0 ? "active" : ""}`}
          onClick={() => setSlides(!Slides)}
        >
          <input
            disabled={categoryQuantity.Slides > 0 ? false : true}
            type="checkbox"
            checked={Slides}
          ></input>
          Slides ({categoryQuantity.Slides})
        </li>
        <li
          className={`${categoryQuantity.ToePostSandals > 0 ? "active" : ""}`}
          onClick={() => setToePostSandals(!ToePostSandals)}
        >
          <input
            disabled={categoryQuantity.ToePostSandals > 0 ? false : true}
            type="checkbox"
            checked={ToePostSandals}
          ></input>
          Toe-Post Sandals ({categoryQuantity.ToePostSandals})
        </li>
        <li
          className={`${categoryQuantity.ActiveSandals > 0 ? "active" : ""}`}
          onClick={() => setActiveSandals(!ActiveSandals)}
        >
          <input
            disabled={categoryQuantity.ActiveSandals > 0 ? false : true}
            type="checkbox"
            checked={ActiveSandals}
          ></input>
          Active Sandals ({categoryQuantity.ActiveSandals})
        </li>
      </ul>
    </div>
  );
};

export default CategoryFilter;
