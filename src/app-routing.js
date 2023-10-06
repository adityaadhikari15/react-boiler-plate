import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import InvalidRoute from "./containers/invalid-route/InvalidRoute.js";
import AuthenticationGuard from "./utils/AuthenticationGuard/AuthenticationGuard.js";
import RoleRouterGuard from "./utils/authenticationGuard/RoleRouteGuard.js";
import Login from "./containers/login/Login.js";
import { Suspense, lazy, useState } from "react";
import UserContext from "./utils/contexts/userContext.js";
import useLocalStorage from "./hooks/localStorage.js";

// Lazy Loading
const AdminLayout = lazy(() => import("./containers/admin/AdminLayout.js"));

const AppRouting = () => {
  const [user, setLoggedInUser] = useState();
  const { getUser } = useLocalStorage();

  return (
    <UserContext.Provider value={{ loggedInUser: getUser(), setLoggedInUser }}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Navigate to="login" />}></Route>
          <Route path="login" element={<Login />} />
          <Route element={<AuthenticationGuard />}>
            <Route path="admin" element={<RoleRouterGuard role={"ADMIN"} />}>
              <Route
                path="*"
                element={
                  <Suspense fallback={<h1>Loading admin.....</h1>}>
                    <AdminLayout />
                  </Suspense> // Suspense used to tell react which route has lazy loading component
                }
              ></Route>
              <Route
                path=""
                element={
                  <Suspense fallback={<h1>Loading admin.....</h1>}>
                    <AdminLayout />
                  </Suspense> // Suspense used to tell react which route has lazy loading component
                }
              ></Route>
            </Route>

            <Route path="*" element={<InvalidRoute />} />
          </Route>
          <Route path="*" element={<InvalidRoute />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default AppRouting;
