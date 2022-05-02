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
    <>
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
        <Clothes />
        <div className="making_better"></div>
        <div className="frequently_questions"></div>
      </div>
    </>
  );
}


const Clothes = () => {


  useEffect(() => {
    
  }, [])
  
  return (
    <div className="clothes">
      <div className="moccasins">
        <img src={Moccasins} alt="moccasins" />
      </div>
      <div className="clothes_child">
        <div className="clothes_child_title">
          <h1>Clothes </h1>
        </div>
        <div className="clothes_child_title">
          <h1>Can Give People</h1>
        </div>
        <div className="clothes_child_title">
          <h1>A Better Images</h1>
        </div>
        <div className="clothes_child_info">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eveniet
          id harum voluptatum eius commodi tenetur repellat debitis quas omnis
          consequuntur mollitia, praesentium assumenda at veniam temporibus
          laborum repudiandae.
        </div>
        <div className="clothes_child_slides">
          <div className="clothes_child_slides_item">
            <img src={Moccasins} alt="moccasins" />
          </div>
          <div className="clothes_child_slides_item">
            <img src={Oxfords} alt="moccasins" />
          </div>
          <div className="clothes_child_slides_item">
            <img src={Loafers} alt="moccasins" />
          </div>
          <div className="clothes_child_slides_item">
            <img src={Derby} alt="moccasins" />
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
