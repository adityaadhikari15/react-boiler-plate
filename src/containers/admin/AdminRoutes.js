import { Navigate, Route, Routes } from "react-router";
import UsersList from "./users/users-list/UsersList";
import ProductsList from "./products/products-list/products-list";
import About from "../about/about";
const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="users" />}></Route>
      <Route path="users" element={<UsersList />}></Route>
      <Route path="products" element={<ProductsList />}></Route>
      {/* <Route path="*" element={<InvalidRoute />} /> */}
    </Routes>
  );
};

export default AdminRoutes;
