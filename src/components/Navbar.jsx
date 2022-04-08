import React,{useState,useEffect,useRef} from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import SignUpModal from "./SignUpModal";
import LogInModal from "./LogInModal";
import Search from "./Search";
import Shopping_bag from '../iconAndImages/shopping_bag_icon.png';
import {navbarData} from  "../Assets/data/NavbarData";
import { useSelector } from "react-redux";
import {auth} from '../firebase-config'
import {signOut} from  'firebase/auth'

const Navbar = () => {

  //catch currentUser from redux/firebase
  const currentUser = useSelector((state)=>state.firebase.value.currentUser)

  //state  for catch current path
  const [pathnameState, setPathnameState] = useState(null);

  //state for to catch navbar,hamburger
  const link = useRef(null);
  const hamburger_anim = useRef(null);
  const navResponAnim = useRef(null);


  const { pathname } = useLocation();
  const navigate = useNavigate()

  // update  current path in state
  if (!pathnameState===pathname) {
    setPathnameState(pathname);
  }
  // find active path
  const active = navbarData.findIndex(e => e.path === pathname);

  // show or not navbar links in responsive 
  const hamburgerAnim_and_navResponAnim = () => {
    hamburger_anim.current.classList.toogle("active");
    navResponAnim.current.classList.toogle("active");
  };

  //state and his update function for active signUp and LogIn modal
  const [reverse_sign, setreverse_sign] = useState(false);
  const [reverse_log, setreverse_log] = useState(false);
  const toogle_sign = () => {
    setreverse_sign(!reverse_sign);
    setreverse_log(false)
  } 
  const toogle_log = () => {
    setreverse_log(!reverse_log)
    setreverse_sign(false)
  }

  //request to firebase to log out
  const logOut = async ()=>{

    try {
      await signOut(auth)
      navigate('/')
      console.log('je')
    }catch{
      alert(
        `For some reasons,we can't deconnect. 
Please check your internet connect and retry.`
      );
    }
  }

  useEffect(() => {
 
    if (pathnameState ==="/") {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
        console.log(window.scrollY);
          link.current.classList.add("link");
        } else {
          link.current.classList.remove("link");
        }
      });
    } else {
      link.current.classList.remove("link");
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
            {navbarData.map((e, i) => (
              <li key={i} className={`${i === active ? "active" : ""}`}>
                <Link to={e.path} className="nav-link">
                  {e.display}
                </Link>
              </li>
            ))}
            {currentUser ? null:(
              <li>
                <button className="btn log_in" onClick={toogle_log}>
                  Log in
                </button>
              </li>
            )}
          </ul>
          <Search />
          {currentUser ? (
            <button className="btn log_out" onClick={logOut}>
              Log Out
            </button>
          ) : (
            <>
              <button className="btn sign_up" onClick={toogle_sign}>
                Sign up
              </button>
              <button className="btn log_in" onClick={toogle_log}>
                Log in
              </button>
            </>
          )}
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
      </nav>

      <SignUpModal reverse_sign={reverse_sign} toogle_sign={toogle_sign} />
      <LogInModal reverse_log={reverse_log} toogle_log={toogle_log} />
    </>
  );
}
export default Navbar;