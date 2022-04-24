import React from 'react'
import { useSelector } from "react-redux";

const AuthenticationBtn = (props) => {

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
            onClick={props.toggle_sign}
          >
            Sign up
          </button>
          <button
            type="button"
            className="auth_btn log_in"
            onClick={props.toggle_log}
          >
            Log in
          </button>
        </>
      )}
    </>
  );
}

export default AuthenticationBtn