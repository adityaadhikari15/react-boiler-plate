import { NavLink } from "react-router-dom";
import AdminRoutes from "./AdminRoutes.js";
import "./admin-layout.scss";
const AdminLayout = () => {
  console.log("Admin layout");
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
                to="/admin/properties"
              >
                <li>Properties</li>
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                to="/"
              >
                <li>Login</li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
      <h1>Layout</h1>
      <AdminRoutes />
    </div>
  );
};

export default AdminLayout;
