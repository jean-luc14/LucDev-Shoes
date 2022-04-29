import React,{useState} from 'react'
import Moccasins from '../Assets/images/moccasins/7/gray.jpg'
import Oxfords from '../Assets/images/oxfords/1/coffee.jpg'
import Loafers from '../Assets/images/loafers/4/gray.jpg'
import Derby from '../Assets/images/H.jpg'

const BestCategory = () => {

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
      <div className="derby">
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
            <p>Moccasins</p>
            <p>Oxfords</p>
            <p>Loafers</p>
          </div>
        </div>
        <div className="bestCategory_child_items">
          <div
            className="moccasins"
            onMouseOver={() => activeCategory("moccasins")}
          >
            <img src={Moccasins} alt="" />
          </div>
          <div className="oxfords" onMouseOver={() => activeCategory("oxfords")}>
            <img src={Oxfords} alt="" />
          </div>
          <div className="loafers" onMouseOver={() => activeCategory("loafers")}>
            <img src={Loafers} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestCategory