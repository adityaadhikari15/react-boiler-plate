import { Navigate, Outlet } from "react-router";
import useLocalStorage from "../../hooks/localStorage";

const AuthenticationGuard = () => {
  const { getToken } = useLocalStorage();

  const token = getToken();
  return <div>{token ? <Outlet></Outlet> : <Navigate to="/login" />}</div>;
};

export default AuthenticationGuard;
