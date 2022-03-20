import axiosClient from "./axiosClient";
const userApi = {
  login: (user) => {
    const url = "/auth/login";
    return axiosClient.post(url, user);
  },
};

export default userApi;
