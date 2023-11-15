import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.38.191.164",
  // withCredentials: true,
});

export default instance;

// refresh token
// session
