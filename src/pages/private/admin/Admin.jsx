import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Admin = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Admin;
