import axios from "axios";

const API_HOST_URL = "https://ngminds.herokuapp.com";

export function secureGet(url) {
  return axios.get(`${API_HOST_URL}${url}`);
}

export function post(url, data) {
  return axios.post(`${API_HOST_URL}${url}`, data);
}

export function axiosInterceptor() {
  axios.interceptors.request.use(
    (config) => {
      console.log(config);
      const newToken = JSON.parse(localStorage.getItem("token"));
      if (newToken) {
        // console.log(token);
        config.headers = { Authorization: `Bearer ${newToken}` };
      }
      return config;
    },
    (error) => {
      console.log(error)
      Promise.reject(error);
    }
  );
}
