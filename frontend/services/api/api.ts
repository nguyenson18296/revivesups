import { HTTP_METHODS } from "../../constants/global";
import { createApiRequest } from "./axios";

class ApiCallCreator {
  getCategories() {
    return createApiRequest(
      `/categories`,
      HTTP_METHODS.GET,
      {}
    );
  };

  createOrder(data: any) {
    return createApiRequest(
      "/orders",
      HTTP_METHODS.POST,
      data
    )
  }

  createOrderLineItem(data: any) {
    return createApiRequest(
      "/order-line-items",
      HTTP_METHODS.POST,
      data
    )
  }
}

const fromApi = new ApiCallCreator();
export default fromApi;