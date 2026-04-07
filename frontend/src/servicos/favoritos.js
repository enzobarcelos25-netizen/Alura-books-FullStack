import axios from "axios"

const favoritosApi = axios.create({
  baseURL: "http://localhost:8000/favoritos"
});

export async function getFavoritos() {
  const response = await favoritosApi.get("/")
  return response.data
}

export async function postFavoritos(id) {
  await favoritosApi.post(`/${id}`)
}

export async function deleteFavoritos(id) {
  await favoritosApi.delete(`/${id}`)
}