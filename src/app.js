import React from "react";
import ReactDOM from "react-dom/client";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "bootstrap/dist/css/bootstrap.css";
import AppRouting from "./app-routing";
import useInternetConnectionStatus from "./hooks/internetConnectionStatus";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

const App = () => {
  const onlineStatus = useInternetConnectionStatus();
  return onlineStatus ? (
    <Provider store={appStore}>
      <AppRouting />
    </Provider>
  ) : (
    <div className="center h-100">
      <h3>Connection lost</h3>
    </div>
  );
};

const reactDOM = ReactDOM.createRoot(document.getElementById("root"));
reactDOM.render(<App />);
