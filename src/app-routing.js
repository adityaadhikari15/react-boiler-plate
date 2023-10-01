import { Routes, Route, BrowserRouter } from "react-router-dom";
import InvalidRoute from "./containers/invalid-route/InvalidRoute.js";
import AuthenticationGuard from "./utils/AuthenticationGuard/AuthenticationGuard.js";
import RoleRouterGuard from "./utils/authenticationGuard/RoleRouteGuard.js";
import AdminLayout from "./containers/admin/AdminLayout.js";
import Login from "./containers/login/Login.js";

const AppRouting = () => {
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

export default AppRouting;
