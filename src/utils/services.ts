import { fetchAPI } from "./api";

export const getProducts = async (query: string) => {
  try {
    const data = await fetchAPI(`/items?_limit=16${query}`);
    return {
      error: false,
      data,
    };
  } catch (error) {
    return {
      error: true,
      data: error,
    };
  }
};

export const getMetadata = async () => {
  try {
    const data = await fetchAPI("/metadata");
    return {
      error: false,
      data,
    };
  } catch (error) {
    return {
      error: true,
      data: error,
    };
  }
};
