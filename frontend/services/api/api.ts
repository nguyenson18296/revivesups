import { HTTP_METHODS } from "../../constants/global";
import { createApiRequest } from "./axios";

class ApiCallCreator {
  getCategories() {
    return createApiRequest(`/categories`, HTTP_METHODS.GET, {});
  }

  createOrder(data: any) {
    return createApiRequest("/orders", HTTP_METHODS.POST, data);
  }

  createOrderLineItem(data: any) {
    return createApiRequest("/order-line-items", HTTP_METHODS.POST, data);
  }

  getProducts(search?: string) {
    return createApiRequest(
      `/products?filters[name][$contains]=${search}&populate=thumbnail`,
      HTTP_METHODS.GET,
      {}
    );
  }

  getLatestProducts(page: number = 1, pageSize: number = 5) {
    return createApiRequest(
      `/products?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=thumbnail`,
      HTTP_METHODS.GET,
      {}
    )
  }

  getPosts(search: string) {
    return createApiRequest(
      `/blogs?filters[title][$contains]=${search}&populate=thumbnail`,
      HTTP_METHODS.GET,
      {}
    );
  }
}

const fromApi = new ApiCallCreator();
export default fromApi;
