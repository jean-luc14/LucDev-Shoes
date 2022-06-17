import React, { useState } from "react";
import Email from "../Assets/icons/Email.png";
import Lock from "../Assets/icons/Lock.png";
import { logIn } from "../redux/firebase/FirebaseSlice";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  toggle_log,
  toggle_forget,
  toggle_sign,
} from "../redux/toggleModal/ToggleModalSlice";
import { useSelector, useDispatch } from "react-redux";

const LogInModal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // form state
  const [form, setForm] = useState({
    email: { value: "" },
    password: { value: "" },
  });

  //firebase
  const [firebaseErrMes, setFirebaseErrMes] = useState("");

  const dispatch = useDispatch();
  const logInModal = useSelector((state) => state.toggleModal.value.logInModal);

  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const newField = { [fieldName]: { value: fieldValue } };
    setForm({ ...form, ...newField });
  };

  //navigate to checkout page if user is on cart page
  const goToCheckout = () => {
    if (location.pathname === "/cart") {
      navigate("/private/checkout-cart");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(form.email.value, form.password.value);
      alert("the connection to your account went well");
      setFirebaseErrMes("");
      dispatch(toggle_log());
      goToCheckout();
    } catch {
      setFirebaseErrMes("Wopsy, Email and/or password incorrect");
      setForm({
        email: { value: form.email.value },
        password: { value: "" },
      });
    }
  };

  return (
    <>
      {logInModal ? (
        <div
          className="op_log"
          onClick={() => {
            dispatch(toggle_log());
            setFirebaseErrMes("");
          }}
        />
      ) : null}
      <div
        className="wrapper_log"
        style={{
          top: logInModal ? "50%" : "-50%",
          left: logInModal ? "50%" : "50%",
          opacity: logInModal ? "1" : "0",
          transform: logInModal
            ? "translate(-50%,-50%)"
            : "translate(-50%,-50%)",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h1>
            Log In{" "}
            <span
              onClick={() => {
                dispatch(toggle_log());
                setFirebaseErrMes("");
              }}
            >
              {" "}
              &times;
            </span>
          </h1>
          {/* email input */}
          <div className="inputBox">
            <input
              name="email"
              type="text"
              value={form.email.value}
              placeholder="Email"
              onChange={(e) => handleInputChange(e)}
            ></input>
            <img src={Email} />
          </div>
          {/* password input */}
          <div className="inputBox">
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password.value}
              onChange={(e) => handleInputChange(e)}
            ></input>
            <img src={Lock} />
          </div>
          <small className="firebaseErrMes">{firebaseErrMes}</small>
          <input className="submit" type="submit" value="Log in"></input>
          <p className="forget">
            Forget <i onClick={() => dispatch(toggle_forget())}>Password</i>
          </p>
          <p className="forget">
            Don't have an{" "}
            <i onClick={() => dispatch(toggle_sign())}>Account </i>
          </p>
        </form>
      </div>
    </>
  );
};

export default LogInModal;
