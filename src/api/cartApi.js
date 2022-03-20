import axiosClient from "./axiosClient";
const cartApi = {
  createPayment: (data) => {
    const url = "/checkout/payment";
    return axiosClient.post(url, data);
  },
};

export default cartApi;
