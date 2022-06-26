import React, { useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SignUpModal from "./SignUpModal";
import LogInModal from "./LogInModal";
import ForgotPasswordModal from "./ForgotPasswordModal";
import Search from "./Search";
import CategoryList from "./CategoryList";
import Shopping_icon from "../Assets/icons/shopping_cart.png";
import { navbarData } from "../Assets/data/NavbarData";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import AuthenticationBtn from "./AuthenticationBtn";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../redux/search/ActiveSearchSlice";
import { toggle_log } from "../redux/toggleModal/ToggleModalSlice";

const Navbar = () => {
  //get products which are in cart
  const cartItems = useSelector((state) => state.cartItems.value);

  //get if the search is active
  const activeSearch = useSelector((state) => state.search.value);

  //catch currentUser from redux/firebase
  const currentUser = useSelector((state) => state.firebase.value.currentUser);

  //state for animate category list
  const [category_list_back_state, setCategory_list_back_state] = useState(false);

  //ref for to catch navbar,hamburger,category list
  const link = useRef(null);
  const categoryRef = useRef(null);
  const hamburger_anim = useRef(null);
  const navResponAnim = useRef(null);
  const dispatch = useDispatch(null);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  // find active path
  const active = navbarData.findIndex((e) => e.path === pathname);

  // show or not navbar links in breakpoint mode
  const hamburgerAnim_and_navResponAnim = () => {
    hamburger_anim.current.classList.toggle("active");
    navResponAnim.current.classList.toggle("active");
  };

  //request to firebase to log out
  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch {
      alert(
        `For some reasons,we can't deconnect. 
Please check your internet connect and retry.`
      );
    }
  };

  //category list animation
  const animCategoryList = () => {
    categoryRef.current.classList.toggle("active");
    setCategory_list_back_state(!category_list_back_state);
  };

  return (
    <>
      <nav id="navbar">
        {activeSearch ? (
          <div
            className="search_wrapper_back"
            onClick={() => dispatch(set(!activeSearch))}
          ></div>
        ) : null}
        <div
          ref={hamburger_anim}
          className="hamburger_menu"
          onClick={hamburgerAnim_and_navResponAnim}
        >
          <div className="slice"></div>
          <div className="slice"></div>
          <div className="slice"></div>
        </div>
        {category_list_back_state ? (
          <div
            onClick={animCategoryList}
            className="category_list_background"
          ></div>
        ) : null}
        <div className="category_list_parent">
          <button
            className="category_list_btn"
            type="button"
            onClick={animCategoryList}
          >
            Category
          </button>
          <div ref={categoryRef} className="category_list_wrapper">
            <CategoryList navbar={true} animCategoryList={animCategoryList} />
          </div>
        </div>
        <div ref={link} id="link">
          <ul ref={navResponAnim} className="link_child">
            {navbarData.map((e, i) => (
              <li
                key={i}
                className={`link_child_li ${i === active ? "active" : ""}`}
              >
                <Link
                  to={e.path}
                  className="nav-link"
                  onClick={hamburgerAnim_and_navResponAnim}
                >
                  {e.display}
                </Link>
              </li>
            ))}
            {currentUser ? null : (
              <li>
                <button
                  className="btn log_in"
                  type="button"
                  onClick={() => dispatch(toggle_log())}
                >
                  Log in
                </button>
              </li>
            )}
          </ul>
          <Search />
          <AuthenticationBtn logOut={logOut} />
          <div className="shopping_icon">
            <Link to="/cart">
              <img src={Shopping_icon} />
              <div> {cartItems.length} </div>
            </Link>
          </div>
        </div>
      </nav>

      <SignUpModal />
      <LogInModal />
      <ForgotPasswordModal />
    </>
  );
};

export default Navbar;
