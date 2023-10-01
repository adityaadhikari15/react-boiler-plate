import { ToastrService } from "./prime-toastr.service";
import useLocalStorage from "../hooks/localStorage";
import useAxiosInterceptor from "../hooks/axiosInterceptor";

const { axiosApiInstance } = useAxiosInterceptor();

const apiUrl = "auth";

const { setToken, setUser } = useLocalStorage();

const UserSignIn = async (data) => {
  try {
    const response = await axiosApiInstance.post(`${apiUrl}/login`, data);
    const _response = await response.data;
    if (_response.token) {
      setToken(_response.token);
      setUser({ ..._response });
      return _response;
    } else {
      ToastrService.error(_response.message, "Error");
      throw new Error(_response.message);
    }
  } catch (err) {
    ToastrService.error(err.message, "Error");
    throw new Error();
  }
};

export { UserSignIn };
