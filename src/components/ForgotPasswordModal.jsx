import React, { useState, useEffect } from "react";
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
  const [emailInput, setEmailInput] = useState({
    value: "",
    errorMes: "",
    isValid: false,
  });
  const [errFromFirebase, setErrFromFirebase] = useState("");

  // Regex of Email
  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Update the value of input in the state
  const handleChange = (e) => {
    setEmailInput({ value: e.target.value, errorMes: "", isValid: false });
  };

  // check validity of Email
  const validEmail = () => {
    if (EMAIL_REGEX.test(emailInput.value)) {
      setEmailInput({
        value: emailInput.value,
        errorMes: "",
        isValid: true,
      });
    } else {
      setEmailInput({
        value: emailInput.value,
        errorMes: "Invalid format email",
        isValid: false,
      });
    }
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    validEmail();
  };

  useEffect(() => {
    //send request to firebase to modify password
    const sendRequest = async () => {
      if (emailInput.isValid) {
        try {
          await forgotPassword(emailInput.value);
          dispatch(toggle_forget());
          alert(
            "We have sent an email to your address so you can change your password"
          );
        } catch {
          setErrFromFirebase("An error has occurred, please try again");
        }
      }
    };
    sendRequest();
  }, [emailInput.isValid]);

  return (
    <>
      {forgetPassModal ? (
        <div
          className="op_forgot_pass"
          onClick={() => {
            dispatch(toggle_forget());
            setErrFromFirebase("");
            setEmailInput({ ...emailInput, errorMes: "" });
          }}
        />
      ) : null}

      <div
        className="wrapper_forgot_pass"
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
                setErrFromFirebase("");
                setEmailInput({ ...emailInput, errorMes: "" });
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
              value={emailInput.value}
              onChange={(e) => handleChange(e)}
            ></input>
            <img src={Email} />
            {emailInput.errorMes.length > 0 ? (
              <div className="inputAlert">
                <span></span>
                <small>
                  <img src={Warning} />
                  {emailInput.errorMes}
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
