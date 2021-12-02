import { fetchAPI } from "./api";

export const getProducts = async () => {
  try {
    const data = await fetchAPI("/items?_page=1&_limit=16");
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
