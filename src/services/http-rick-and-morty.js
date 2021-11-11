const baseURL = "https://rickandmortyapi.com/api/character";
const cartoonsURL = `${baseURL}/character`;

export function getCartoon(url = baseURL) {
  return fetch(url).then((resp) => resp.json());
}
