import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Moccasins from '../Assets/images/moccasins/7/gray.jpg'
import Oxfords from '../Assets/images/oxfords/1/coffee.jpg'
import Loafers from '../Assets/images/loafers/4/gray.jpg'
import Derby from '../Assets/images/H.jpg'

const BestCategory = () => {

  //Navigate
  const navigate = useNavigate();

  // state for catch the category which active
  const [activeMoccasins, setActiveMoccasins] = useState(false)
  const [activeOxfords, setActiveOxfords] = useState(false)
  const [activeLoafers, setActiveLoafers] = useState(false)

  // function to toggle class animate bestCategory
  const activeCategory = (category) => {
    if (category === "moccasins") {
      setActiveMoccasins(true);
      setActiveOxfords(false);
      setActiveLoafers(false);
    } else if (category === "oxfords") {
      setActiveMoccasins(false);
      setActiveOxfords(true);
      setActiveLoafers(false);
    } else if (category === "loafers") {
      setActiveMoccasins(false);
      setActiveOxfords(false);
      setActiveLoafers(true);
    }
  }
  return (
    <div className="bestCategory">
      <div className="derby" onClick={() => navigate("/derby-shoes")}>
        <img src={Derby} alt="" />
      </div>
      <div
        // give a current active category class to animate
        className={`bestCategory_child ${
          activeMoccasins ? "active-moccasins" : ""
        } 
        ${activeOxfords ? "active-oxfords" : ""}
        ${activeLoafers ? "active-loafers" : ""}`}
      >
        <div className="bestCategory_child_name">
          <div>
            <p onClick={() => navigate("/moccasins")}>
              <p className="slide_item">Moccasins</p>
              <img src={Moccasins} alt="moccasins" />
            </p>
            <p onClick={() => navigate("/oxfords")}>
              <p className="slide_item">Oxfords</p>
              <img src={Oxfords} alt="oxfords" />
            </p>
            <p onClick={() => navigate("/loafers")}>
              <p className="slide_item">Loafers</p>
              <img src={Loafers} alt="loafers" />
            </p>
          </div>
        </div>
        <div className="bestCategory_child_items">
          <div
            className="moccasins"
            onMouseOver={() => activeCategory("moccasins")}
            onClick={() => navigate("/moccasins")}
          >
            <img src={Moccasins} alt="moccasins" />
          </div>
          <div
            className="oxfords"
            onMouseOver={() => activeCategory("oxfords")}
            onClick={() => navigate("/oxfords")}
          >
            <img src={Oxfords} alt="oxfords" />
          </div>
          <div
            className="loafers"
            onMouseOver={() => activeCategory("loafers")}
            onClick={() => navigate("/loafers")}
          >
            <img src={Loafers} alt="loafers" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestCategory