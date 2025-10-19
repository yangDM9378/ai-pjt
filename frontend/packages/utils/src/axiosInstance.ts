import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

api.interceptors.request.use((config) => {
  console.log(`${config.url}로 요청 중`)
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error("요청 실패", error);
    return Promise.reject(error);
  }
)

export default api;