import useAxiosInterceptor from "../hooks/axiosInterceptor";
import { ToastrService } from "./prime-toastr.service";

const apiUrl = "products";
const { axiosApiInstance } = useAxiosInterceptor();

const GetProducts = async () => {
  try {
    const response = await axiosApiInstance.get(`${apiUrl}`);
    const _response = await response.data;
    if (_response.products) {
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

export { GetProducts };
