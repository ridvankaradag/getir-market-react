import { fetchAPI } from "./api";

export const getProducts = async (query: string) => {
  try {
    const { data, totalCount } = await fetchAPI(`/items?_limit=16${query}`);
    return {
      error: false,
      data,
      totalCount,
    };
  } catch (error) {
    return {
      error: true,
      data: error,
      totalCount: 0,
    };
  }
};

export const getMetadata = async () => {
  try {
    const { data } = await fetchAPI("/metadata");
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
