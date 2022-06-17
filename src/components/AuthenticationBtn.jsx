import React from "react";
import { toggle_sign, toggle_log } from "../redux/toggleModal/ToggleModalSlice";
import { useSelector, useDispatch } from "react-redux";

const AuthenticationBtn = (props) => {
  const dispatch = useDispatch();
  //catch currentUser from redux/firebase
  const currentUser = useSelector((state) => state.firebase.value.currentUser);

  return (
    <>
      {currentUser ? (
        <button
          type="button"
          className="auth_btn log_out"
          onClick={props.logOut}
        >
          Log Out
        </button>
      ) : (
        <>
          <button
            type="button"
            className="auth_btn sign_up"
            onClick={() => dispatch(toggle_sign())}
          >
            Sign up
          </button>
          <button
            type="button"
            className="auth_btn log_in"
            onClick={() => dispatch(toggle_log())}
          >
            Log in
          </button>
        </>
      )}
    </>
  );
};

export default AuthenticationBtn;
