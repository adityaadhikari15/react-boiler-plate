import { NavLink } from "react-router-dom";
import AdminRoutes from "./AdminRoutes.js";
import "./admin-layout.scss";
import reactLogo from "../../assets/images/react.png";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <div className="side-bar">
        <div className="side-bar">
          <div className="center">
            <img src={reactLogo} width={80} />
          </div>
          <nav>
            <ul>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                to="/admin/users"
              >
                <li>Users</li>
              </NavLink>
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
                to="/login"
              >
                <li>Logout</li>
              </NavLink>
            </ul>
          </nav>
          <div className="p-4 pb-0">
            <button
              className="btn btn-sm btn-dark w-100 p-8px"
              onClick={() => {
                window.open(
                  "https://github.com/adityaadhikari15/react-live-project#readme"
                );
              }}
            >
              <i className="pi pi-github "></i> Github
            </button>
          </div>
        </div>
      </div>
      <div className="main-content">
        <AdminRoutes />
      </div>
    </div>
  );
};

export default AdminLayout;
