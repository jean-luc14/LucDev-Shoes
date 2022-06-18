import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserConnected = () => {
  const currentUser = useSelector((state) => state.firebase.value.currentUser);

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default UserConnected;
