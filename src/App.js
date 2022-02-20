import React,{useEffect} from "react";
import "swiper/swiper.scss";
import "./App.scss";
import Home from "./Home";
import Contact from "./Contact";
import About_us from "./About_us";
import A from "./Composants-de-chaussures/Oxford/A";
import B from "./Composants-de-chaussures/Oxford/B";
import Richelieu from "./Categories/Richelieu";
import NavHeader from "./NavHeader";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";


const App = () => {
  window.addEventListener("load", () => {
    document.getElementById("loader").classList.add("fondu_out");
  });

  // var r;
  // r = 2;
  // useEffect(() => {
  //   window.addEventListener('click', e => {
  //     const clickAnim = document.createElement('canvas');
  //     let canCtx = clickAnim.getContext('2d'); 
  //     clickAnim.width = 80;
  //     clickAnim.height = 80;
  //     clickAnim.className = 'clickAnim';
  //     clickAnim.style.top = `${e.pageY - 40}px`;
  //     clickAnim.style.left = `${e.pageX - 40}px`;
  //     document.body.appendChild(clickAnim);
      
  //     let R = 0;
  //     let reqAnim;
      
  //     const canAnim = () => {
  //       canCtx.beginPath();
  //       canCtx.arc(40, 40, R, 0, 2 * Math.PI);
  //       canCtx.strokeStyle = '#CE6A14';
  //       canCtx.lineWidth = 3;
  //       canCtx.stroke();
        
        
      
  //       R = R + r;
  //       // if (0 <= R < 20) {
  //       //   r = 2;
  //       // }
  //       if (20 <= R <= 30) {
  //         r = 1;
  //       } 
  //       else if(R>30) {
          
  //         r = 0;
  //       }
      
        
  //       console.log(R);
  //       reqAnim = requestAnimationFrame(canAnim);
  //     }
  //     reqAnim = requestAnimationFrame(canAnim);
  //     if (R >= 30) {
  //       cancelAnimationFrame(reqAnim);
  //     }
  //     //canAnim();
  //     // setInterval(() => {
  //     //  canCtx.clearRect(0,0,clickAnim.width,clickAnim.height)
  //     // },130)
      
  //     // setTimeout(() => {
  //     //   clickAnim.remove();
  //     // }, 1500);
  //   })

  // }, [r])

  return (
    <>
      <div id="loader">
        <span className="lettre">L</span>
        <span className="lettre">O</span>
        <span className="lettre">A</span>
        <span className="lettre">D</span>
        <span className="lettre">I</span>
        <span className="lettre">N</span>
        <span className="lettre">G</span>
        <span className="lettre">.</span>
        <span className="lettre">.</span>
        <span className="lettre">.</span>
      </div>
      <Router>
        <main>
          <NavHeader />
          <Route path="/" exact component={Home} />
          <Route path="/About_us" exact component={About_us} />
          <Route path="/Contact" exact component={Contact} />
          <Route
            path="/Composants-de-chaussures/Oxford/A"
            exact
            component={A}
          />
          <Route
            path="/Composants-de-chaussures/Oxford/B"
            exact
            component={B}
          />
          <Route path="/Categories/Richelieu" exact component={Richelieu} />
          <br />
          <div>
            <ul className="link">
              <li className="style_link">
                {" "}
                <Link to="/Composants-de-chaussures/Oxford/A"> A </Link>{" "}
              </li>
              <li className="style_link">
                {" "}
                <Link to="/Composants-de-chaussures/Oxford/B"> B </Link>{" "}
              </li>
            </ul>
          </div>
        </main>
      </Router>
      <Footer />
    </>
  );
};

export default App;
