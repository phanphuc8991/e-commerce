import { userAxiosClient } from "./axiosClient";
const orderApi = {
  create: (order) => {
    const url = "/orders";
    return userAxiosClient.post(url, order);
  },
};

export default orderApi;
