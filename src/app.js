import React from "react";
import ReactDOM from "react-dom/client";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "bootstrap/dist/css/bootstrap.css";
import AppRouting from "./app-routing";

const App = () => {
  return <AppRouting />;
};

const reactDOM = ReactDOM.createRoot(document.getElementById("root"));
reactDOM.render(<App />);
