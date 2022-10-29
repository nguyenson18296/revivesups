import Axios from "axios";

import { HTTP_METHODS, API_ENDPOINT_URL } from "../../constants/global";

const axios = Axios.create({
    baseURL: API_ENDPOINT_URL
});

export const createApiRequest = async (
    url: string,
    method: HTTP_METHODS,
    data: any
) => {
    try {
        const response = await axios({
            url,
            method,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            data,
          });
          return response.data;
    } catch (err) {
        console.error(err);
        throw new Error(err as any);
    }
}