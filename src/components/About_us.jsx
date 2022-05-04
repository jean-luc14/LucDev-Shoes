import React,{useEffect,useState} from 'react';
import Frequently_Questions from "./Frequently_Questions";
import Oxfords from '../Assets/images/oxfords/1/coffee.jpg'
import Loafers from '../Assets/images/loafers/4/gray.jpg'
import Derby from '../Assets/images/H.jpg'
import Moccasins from "../Assets/images/moccasins/7/gray.jpg";

const About_us = () => {

  //state to catch active/not active to animate about us titles
  const [activeAboutUsTitle, setActiveAboutUsTitle] = useState(false)
  const [activeMakingBetterTitle, setActiveMakingBetterTitle] = useState(false)


  useEffect(() => {
    setActiveAboutUsTitle(true);
    setActiveMakingBetterTitle(true);
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
        <Making_better activeMakingBetterTitle={activeMakingBetterTitle}/>
        <Frequently_Questions/>
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

const Making_better = ({ activeMakingBetterTitle }) => {
  useEffect(() => {
    //Catch titles container
    const MakingChild = document.querySelector(
      ".making_better_child"
    );
    
    //Catch titles 
    const titles = document.querySelectorAll(
      ".making_better_child h1");
    
    //Add active class to title if he is visible in viewport 
    window.addEventListener('scroll',()=>{
      const { scrollTop, clientHeight } = document.documentElement;
      const TopMakingChildToTopViewport = MakingChild.getBoundingClientRect().top;
      if (scrollTop > (scrollTop + TopMakingChildToTopViewport).toFixed()
      - clientHeight * 0.9) {
      titles.forEach((title) => {
        title.classList.add("active");
      });
      }
    })

  }, []);
  return (
    <div className="making_better">
      <div className="making_better_child">
        <div className="making_better_child_title ">
          <h1 className="first ">We Are</h1>
        </div>
        <div className="making_better_child_title">
          <h1 className="second ">Making Better</h1>
        </div>
        <div className="making_better_child_title">
          <h1  className="last ">Your Life Style</h1>
        </div>
        <div className="making_better_child_info">
          <h2>10+</h2>
          <div>
            <h3>Years Of Experience</h3>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              molestias eius iusto veniam.
            </div>
          </div>
        </div>
        <div className="making_better_child_info">
          <h2>20K+</h2>
          <div>
            <h3>Loyal Customer</h3>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              molestias eius iusto veniam.
            </div>
          </div>
        </div>
      </div>
      <div className={`moccasins ${activeMakingBetterTitle ? "active" : ""}`}>
        <img src={Moccasins} alt="moccasins" />
        <div>
          <h2>We the best </h2>
        </div>
      </div>
    </div>
  );
};

export default About_us;
