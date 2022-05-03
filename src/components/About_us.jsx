import React,{useEffect,useState} from 'react';
import Oxfords from '../Assets/images/oxfords/1/coffee.jpg'
import Loafers from '../Assets/images/loafers/4/gray.jpg'
import Derby from '../Assets/images/H.jpg'
import Moccasins from "../Assets/images/moccasins/7/gray.jpg";

const About_us = () => {

  //state to catch active/not active to animate about us header
  const [activeAboutUsTitle, setActiveAboutUsTitle] = useState(false)

  useEffect(() => {
    setActiveAboutUsTitle(true)
  }, []);  
  return (
    <div className="about_us">
      <div className="about_us_header">
        <img src={Moccasins} alt="moccasins" />
        <div className="about_us_title">
          <div className="about_us_title_child ">
            <h1 className={`${activeAboutUsTitle ? "active first" : ""}`}>
              About
            </h1>
          </div>
          <div className="about_us_title_child last">
            <h1 className={`${activeAboutUsTitle ? "active last" : ""}`}>
              Momo Shoes
            </h1>
          </div>
        </div>
      </div>
      <div className="about_us_body">
        <Clothes activeAboutUsTitle={activeAboutUsTitle} />
        <div className="making_better"></div>
        <div className="frequently_questions"></div>
      </div>
    </div>
  );
}

//the css of clothes components is in clothes.scss
const Clothes = ({ activeAboutUsTitle }) => {

  return (
    <div className="clothes">
      <div className={`moccasins ${activeAboutUsTitle ? 'active':''}`}>
        <img src={Moccasins} alt="moccasins" />
        <div>
          <h2>Hello </h2>
        </div>
      </div>
      <div className="clothes_child">
        <div className="clothes_child_title ">
          <h1 className={`${activeAboutUsTitle ? "active first" : ""}`}>
            Clothes
          </h1>
        </div>
        <div className="clothes_child_title">
          <h1 className={`${activeAboutUsTitle ? "active second" : ""}`}>
            Can Give People
          </h1>
        </div>
        <div className="clothes_child_title">
          <h1 className={`${activeAboutUsTitle ? "active last" : ""}`}>
            A Better Images
          </h1>
        </div>
        <div className="clothes_child_slides">
          <div className="clothes_child_slides_item">
            <img className="first" src={Moccasins} alt="Moccasins" />
          </div>
          <div className="clothes_child_slides_item">
            <img className="second" src={Oxfords} alt="Oxfords" />
          </div>
          <div className="clothes_child_slides_item">
            <img className="last" src={Loafers} alt="Loafers" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Making_better = () => {
  return <div>About_us</div>;
};

const Frequently_questions = () => {
  return <div>About_us</div>;
};
    
export default About_us;
