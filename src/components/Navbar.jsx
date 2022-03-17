import React,{useState,useEffect,useRef} from 'react';
import '../scss/components/Navbar.scss';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Sign_up from './Sign_up';
import Log_in from './Log_in';
import Search from "./Search";
import Shopping_bag from '../iconAndImages/shopping_bag_icon.png';
import {navHeader} from  "../Assets/data/NavbarData";
//import { topCatalogData } from "../Assets/data/CatalogData";

const Navbar = () => {
  const [pathnameState, setPathnameState] = useState(null);

  const link = useRef(null);
  const hamburger_anim = useRef(null);
  //const miniCatalogList = useRef(null);
  const navResponAnim = useRef(null);
  const { pathname } = useLocation();
  if (!pathnameState===pathname) {
    setPathnameState(pathname);
  }

  const active = navHeader.findIndex(e => e.path === pathname);
  
  const hamburgerAnim_and_navResponAnim = () => {
    hamburger_anim.current.classList.toogle("active");
    navResponAnim.current.classList.toogle("active");
  };
  // const add_class = () => cat.current.classList.add("catalog_list");
  // const remove_class = () => cat.current.classList.remove("catalog_list");

  const [reverse_sign, setreverse_sign] = useState(false);
  const toogle_sign = () => {
    setreverse_sign(!reverse_sign);
    setreverse_log(false)
  }
  
  const [reverse_log, setreverse_log] = useState(false);
  const toogle_log = () => {
    setreverse_log(!reverse_log)
    setreverse_sign(false)
  }
  
  //this function will be work in mobile and tablet mode
  // const showCatalogList = (catalogSlug) => { 
  //   navigate(`/${catalogSlug}`)
  // }

  useEffect(() => {
    //   const [darkTheme, setDarkTheme] = useState(false);

    // // React useEffect hook that will fire up
    // // when "darkTheme" changes
    // useEffect(() => {
    //   // Accessing scss variable "--background-color"
    //   // and "--text-color" using plain JavaScript
    //   // and changing the same according to the state of "darkTheme"
    //   const root = document.documentElement;
    //   root?.style.setProperty(
    //     "--background-color",
    //     darkTheme ? "#262833" : "#fff"
    //   );
    //   root?.style.setProperty("--text-color", darkTheme ? "#fff" : "#262833");
    // }, [darkTheme]);
    
    if (pathnameState ==="/") {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
        console.log(window.scrollY);
          link.current.classList.add("link");
          //miniCatalogList.current.classList.add('miniCatalogList')
        } else {
          link.current.classList.remove("link");
          //miniCatalogList.current.classList.remove('miniCatalogList')
        }
      });
    } else {
      link.current.classList.remove("link");
      //miniCatalogList.current.classList.remove('miniCatalogList')
    }
    return () => {
      window.removeEventListener('scroll');
    };
  }, [pathnameState]);
   

  return (
    <>
      <nav id="navbar">
        <div ref={link} id="link">
          <ul ref={navResponAnim} className="link_child">
            {navHeader.map((e, i) => (
              <li key={i} className={`${i === active ? "active" : ""}`}>
                <Link to={e.path} className="nav-link">
                  {e.display}
                </Link>
              </li>
            ))}
            <li>
              <button className="btn log_in" onClick={toogle_log}>
                Log in
              </button>
            </li>
          </ul>
              <Search/>
          <button className="btn sign_up" onClick={toogle_sign}>
            Sign up
          </button>
          <button className="btn log_in" onClick={toogle_log}>
            Log in
          </button>
          <div className="ecommerce_icons">
            <Link to="/cart">
              <img src={Shopping_bag} />
            </Link>
          </div>
          <div
            ref={hamburger_anim}
            className="hamburger_menu"
            onClick={hamburgerAnim_and_navResponAnim}
          >
            <div className="slice"></div>
            <div className="slice"></div>
            <div className="slice"></div>
          </div>
        </div>
        {/*}<div
          id="miniCatalogList"
          ref={miniCatalogList}
          onClick={showCatalogList}
        >
          {topCatalogData.map((item, i) => (
            <span key={i}>{item.display}</span>
          ))}
        </div>*/}
      </nav>

      <Sign_up reverse_sign={reverse_sign} toogle_sign={toogle_sign} />
      <Log_in reverse_log={reverse_log} toogle_log={toogle_log} />
    </>
  );
}
export default Navbar;