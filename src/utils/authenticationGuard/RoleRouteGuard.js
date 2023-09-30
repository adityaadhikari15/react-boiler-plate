import React from "react";
import { Outlet } from "react-router";

const RoleRouterGuard = ({ role }) => {
  const checkRole = () => {
    console.log(role);
    switch (role) {
      case "ADMIN":
        return <Outlet />;
      default:
        return <h1>No project match</h1>;
    }
  };
  return <div>{checkRole()}</div>;
};

export default RoleRouterGuard;
