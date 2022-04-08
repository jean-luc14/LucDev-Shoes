import React,{useEffect} from "react";
import "swiper/css";
import "./App.scss";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Routing from "./routes/Routing";
import Footer from "./components/Footer";
import ProductViewModal from "./components/ProductViewModal";
import { useSelector } from 'react-redux'
import {onAuthStateChanged} from "firebase/auth"
import {useDispatch} from 'react-redux'
import {setCurrentUser,setLoadingData} from './redux/firebase/FirebaseSlice'
import { auth } from "./firebase-config";

const App = () => {

  //Eviter d'afficher l'application avant la requete de verification de firebase lancé dans useEffect 
  const loadingData = useSelector((state) => state.firebase.value.loadingData)
  

  window.addEventListener("load", () => {
      document.getElementById("loader").classList.add("fondu_out");
  });
  const dispatch = useDispatch()
  /* var r;
  r = 2;
  useEffect(() => {
    window.addEventListener('click', e => {
      const clickAnim = document.createElement('canvas');
      let canCtx = clickAnim.getContext('2d'); 
      clickAnim.width = 80;
      clickAnim.height = 80;
      clickAnim.className = 'clickAnim';
      clickAnim.style.top = `${e.pageY - 40}px`;
      clickAnim.style.left = `${e.pageX - 40}px`;
      document.body.appendChild(clickAnim);
      
      let R = 0;
      let reqAnim;
      
      const canAnim = () => {
        canCtx.beginPath();
        canCtx.arc(40, 40, R, 0, 2 * Math.PI);
        canCtx.strokeStyle = '#CE6A14';
        canCtx.lineWidth = 3;
        canCtx.stroke();

        R = R + r;
        // if (0 <= R < 20) {
        //   r = 2;
        // }
        if (20 <= R <= 30) {
          r = 1;
        } 
        else if(R>30) {
          
          r = 0;
        }
        
        console.log(R);
        reqAnim = requestAnimationFrame(canAnim);
      }
      reqAnim = requestAnimationFrame(canAnim);
      if (R >= 30) {
        cancelAnimationFrame(reqAnim);
      }
      //canAnim();
      // setInterval(() => {
      //  canCtx.clearRect(0,0,clickAnim.width,clickAnim.height)
      // },130)
      
      // setTimeout(() => {
      //   clickAnim.remove();
      // }, 1500);
    })

  }, [r])*/

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch(setCurrentUser(currentUser))
      dispatch(setLoadingData(false));
    })
  
    return unsubscribe
  }, [])
  
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
      <main>
        <Navbar />
        <Routing/>
        <br />
        <div>
          <ul className="link">
            <li className="style_link">
              <Link to="/Composants-de-chaussures/Oxford/B"> B </Link>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
      <ProductViewModal/>
    </>
  );
};

export default App;
