import { Navigate, Route, Routes } from "react-router";
import AdminPropertiesList from "./admin-properties-list/AdminPropertiesList";
const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="properties" />}></Route>
      <Route path="properties" element={<AdminPropertiesList />}></Route>
      {/* <Route path="*" element={<InvalidRoute />} /> */}
    </Routes>
  );
};

export default AdminRoutes;
