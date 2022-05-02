import axiosClient from "./axiosClient";
const categoryApi = {
  getAll: (params) => {
    const url = "/categories";
    return axiosClient.get(url, { params });
  },
  create: (data) => {
    const url = "/categories";
    return axiosClient.post(url, data);
  },
};

export default categoryApi;
