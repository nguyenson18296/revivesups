import { HTTP_METHODS } from "../../constants/global";
import { createApiRequest } from "./axios";

class ApiCallCreator {
  getCategories() {
    return createApiRequest(
      `/categories`,
      HTTP_METHODS.GET,
      {}
    );
  }
}

const fromApi = new ApiCallCreator();
export default fromApi;