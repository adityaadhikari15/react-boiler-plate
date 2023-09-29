import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./containers/login/Login.js";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {};

const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
]);

const reactDOM = ReactDOM.createRoot(document.getElementById("root"));
reactDOM.render(<RouterProvider router={appRouter} />);
