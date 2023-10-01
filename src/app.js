import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "./containers/login/Login.js";
import "bootstrap/dist/css/bootstrap.css";
import InvalidRoute from "./containers/invalid-route/InvalidRoute.js";
import AuthenticationGuard from "./utils/AuthenticationGuard/AuthenticationGuard.js";
import RoleRouterGuard from "./utils/authenticationGuard/RoleRouteGuard.js";
import AdminLayout from "./containers/admin/AdminLayout.js";
const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route element={<AuthenticationGuard />}>
          <Route path="admin" element={<RoleRouterGuard role={"ADMIN"} />}>
            <Route path="" element={<AdminLayout />}></Route>
            <Route path="*" element={<AdminLayout />}></Route>
          </Route>
          <Route path="*" element={<InvalidRoute />} />
          {/* <Route path="seller/*" element={<AdminRouterGuard />}></Route>
          <Route path="admin/*" element={<AdminRouterGuard />}></Route> */}
        </Route>
        <Route path="*" element={<InvalidRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

const reactDOM = ReactDOM.createRoot(document.getElementById("root"));
reactDOM.render(<App />);
