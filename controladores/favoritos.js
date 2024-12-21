import { getTodosFavoritos, getFavorito, postFavorito, deleteFavorito } from "../servicos/favoritos.js";

export async function getFavoritos(req, res) {
  try {
    const favoritos = await getTodosFavoritos()
    res.status(200).json(favoritos)    
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}

export async function getFavoritoPorId(req, res) {
  try {
    const id = req.params.id;    
    const favorito = await getFavorito(id)
    res.status(200).json(favorito)
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}

export async function postNovoFavorito(req, res) {
  try {
    const novoFavorito = req.body;
    const favoritoInserido = await postFavorito(novoFavorito)
    res.status(201).json(favoritoInserido)
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}

export async function deleteFavoritoPorId(req, res) {
  try {
    const id = req.params.id;    
    const favoritoDeletado = await deleteFavorito(id)
    res.status(204).json(favoritoDeletado)
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}
