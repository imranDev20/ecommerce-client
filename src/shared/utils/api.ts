import http from "../services/http";

export const apiGet = async (url: string, params?: object) => {
  try {
    const response = await http.get(url, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiGetSingle = async (
  url: string,
  id: string,
  populate?: string,
  params?: object
) => {
  try {
    const response = await http.get(
      `${url}/${id}${populate ? `?populate=${populate}` : ""}`,
      { params }
    );

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

export const apiPatch = async (url: string, id: string, data: object) => {
  try {
    const response = await http.patch(`${url}/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
