import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {"Content-Type": "application/json"}
  });
  // instance.interceptors.request.use(function (config) {
  //   const token = localStorage.getItem('token');
  //   config.headers.Authorization =  token ? `${token}` : '';
  //   return config;
  // });
  export default instance;