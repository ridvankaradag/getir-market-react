const API_URL = "https://node-getir-json-server.herokuapp.com";

export function getServerURL(path: string = "") {
  return `${API_URL}${path}`;
}

export async function fetchAPI(path: string) {
  const requestUrl = getServerURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}
