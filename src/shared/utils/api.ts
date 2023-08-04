import http from "../services/http";

export const apiGet = async (url: string, params?: object) => {
  try {
    const response = await http.get(url, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiPost = async (url: string, data: object) => {
  try {
    const response = await http.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// ...other common API methods (put, delete, etc.)
