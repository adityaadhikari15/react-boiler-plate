import { NavLink } from "react-router-dom";
import AdminRoutes from "./AdminRoutes.js";
import "./admin-layout.scss";
const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <div className="side-bar">
        <div className="side-bar">
          <div className="center">
            <img src="https://primefaces.org/cdn/primereact/images/primereact-logo-dark.svg" />
          </div>
          <nav>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                  }
                  to="/"
                >
                  Login
                </NavLink>
              </li>

              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                to="/admin/products"
              >
                <li>Products</li>
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                to="/admin/users"
              >
                <li>Users</li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
      <div className="main-content">
        <AdminRoutes />
      </div>
    </div>
  );
};

export default AdminLayout;
