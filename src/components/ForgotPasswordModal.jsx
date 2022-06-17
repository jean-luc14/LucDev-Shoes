import React, { useState } from "react";
import { forgotPassword } from "../redux/firebase/FirebaseSlice";
import Warning from "../Assets/icons/warning.png";
import Email from "../Assets/icons/Email.png";
import { toggle_forget } from "../redux/toggleModal/ToggleModalSlice";
import { useSelector, useDispatch } from "react-redux";

const ForgotPasswordModal = () => {
  const forgetPassModal = useSelector(
    (state) => state.toggleModal.value.forgetPassModal
  );
  const dispatch = useDispatch();

  // State for input value, invalid email error, toggle to show invalid email error and firebase Error in order
  const [inputValue, setInputValue] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [showEmailErr, setShowEmailErr] = useState(false);
  const [errFromFirebase, setErrFromFirebase] = useState("");

  // Regex of Email
  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // check validity of Email
  const validEmail = () => {
    if (EMAIL_REGEX.test(inputValue)) {
      setEmailErr("");
      setShowEmailErr(false);
    } else {
      setEmailErr("Invalid format email");
      setShowEmailErr(true);
    }
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    validEmail();
    try {
      await forgotPassword(inputValue);
      dispatch(toggle_forget());
      alert(
        "We have sent an email to your address so you can change your password"
      );
    } catch {
      setErrFromFirebase("An error has occurred, please try again");
    }
  };

  // Update the value of input in the state
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      {forgetPassModal ? (
        <div
          className="op_forgot"
          onClick={() => {
            dispatch(toggle_forget());
            setErrFromFirebase("");
            setShowEmailErr(false);
          }}
        />
      ) : null}

      <div
        className="wrapper_forgot"
        //ref={backdropWrapperSign}
        style={{
          top: forgetPassModal ? "50%" : "-50%",
          left: forgetPassModal ? "50%" : "50%",
          opacity: forgetPassModal ? "1" : "0",
          transform: forgetPassModal
            ? "translate(-50%,-50%)"
            : "translate(-50%,-50%)",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h1>
            Email
            <span
              onClick={() => {
                dispatch(toggle_forget());
                setShowEmailErr(false);
              }}
            >
              &times;
            </span>
          </h1>
          {/* email input */}
          <div className="inputBox">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={inputValue}
              onChange={(e) => handleChange(e)}
            ></input>
            <img src={Email} />
            {showEmailErr ? (
              <div className="inputAlert">
                <span></span>
                <small>
                  <img src={Warning} />
                  {emailErr}
                </small>
              </div>
            ) : null}
          </div>
          {/* submit form */}
          <small className="errFromFirebase">{errFromFirebase}</small>
          <input className="submit" type="submit" value="Send"></input>
        </form>
      </div>
    </>
  );
};

export default ForgotPasswordModal;
