import axios from "axios";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Set your API base URL here
  // You can add other common configurations here
});

// Request interceptor
http.interceptors.request.use(
  (config) => {
    // Modify request config before sending
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
http.interceptors.response.use(
  (response) => {
    // Modify response data before resolving
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default http;
