import useAxiosInterceptor from "../hooks/axiosInterceptor";
import { ToastrService } from "./prime-toastr.service";

const apiUrl = "users";
const { axiosApiInstance } = useAxiosInterceptor();

const GetUsers = async () => {
  try {
    const response = await axiosApiInstance.get(`${apiUrl}`);
    const _response = await response.data;
    if (_response.users) {
      return _response;
    } else {
      ToastrService.error(_response.message, "Error");
      throw new Error(_response.message);
    }
  } catch (err) {
    // ToastrService.error(err.message, "Error");
    throw new Error();
  }
};

export { GetUsers };
