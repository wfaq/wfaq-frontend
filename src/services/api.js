import axios from "axios";

const api = axios.create({
  baseURL: "https://wfaq-backend.herokuapp.com/"
});

export default api;
