import axios from "axios";
import { ToastrService } from "./prime-toastr.service";
import { environment } from "../environment/environment";
import useLocalStorage from "../hooks/localStorage";

const apiUrl = environment.apiUrl + "auth";
const { setToken, setUser, getToken } = useLocalStorage();

const UserSignIn = async (data) => {
  try {
    const response = await axios.post(`${apiUrl}/signin`, data);
    const _response = await response.data;
    if (_response.user) {
      setToken(_response.token);
      setUser(_response.user);
      console.log(getToken());
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
