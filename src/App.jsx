import React,{useState,useEffect} from "react";
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
  //Avoid displaying the application before the firebase verification request launched in useEffect
  const loadingData = useSelector((state) => state.firebase.value.loadingData);

  // animate text before loading the document
  window.addEventListener("load", () => {
    document.getElementById("loader").classList.add("fondu_out");
  });

  //useDispatch
  const dispatch = useDispatch(); 

  useEffect(() => {
    //get progress bar Html Elements
    const progressBarClick = document.querySelector(".click_scroll_bar");
    const progressBar = document.querySelector(".click_scroll_bar .scroll_bar");

    //progress bar click
    const progressBarClickFunc = () => {
      let totalHeight =
        document.documentElement.scrollHeight  

      progressBarClick.addEventListener("click", (e) => {
        let newPageScroll =
          (e.clientY / progressBarClick.offsetHeight) * totalHeight;
        window.scrollTo({
          top: newPageScroll,
          behavior: "smooth",
        });
      });
    };

    //progress bar 
    const progressBarFunc = () => {
      window.addEventListener("scroll", () => {
        let totalHeight =
          document.documentElement.scrollHeight 

        let progressHeight =
          (document.documentElement.clientHeight / totalHeight) * 100;
        progressBar.style.height = `${progressHeight}%`;

        let progressTop = (document.documentElement.scrollTop / totalHeight) * 100;
        progressBar.style.top = `${
          progressTop 
        }%`;
      });
    };

    progressBarClickFunc();
    progressBarFunc();

    // firebase unsubscribe
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch(setCurrentUser(currentUser));
      dispatch(setLoadingData(false));
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <div className="click_scroll_bar">
        <div className="scroll_bar"></div>
      </div>
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
        <Routing />
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
      <ProductViewModal />
    </>
  );
};

export default App;
