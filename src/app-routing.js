import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import InvalidRoute from "./containers/invalid-route/InvalidRoute.js";
import AuthenticationGuard from "./utils/AuthenticationGuard/AuthenticationGuard.js";
import RoleRouterGuard from "./utils/authenticationGuard/RoleRouteGuard.js";
import Login from "./containers/login/Login.js";
import { Suspense, lazy } from "react";

// Lazy Loading
const AdminLayout = lazy(() => import("./containers/admin/AdminLayout.js"));

const AppRouting = () => {
  return (
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
                </Suspense>
              }
            ></Route>
            {/* <Suspense>
              <Route path="" element={<AdminLayout />}></Route>
            </Suspense> */}
          </Route>
          <Route path="*" element={<InvalidRoute />} />
        </Route>
        <Route path="*" element={<InvalidRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
