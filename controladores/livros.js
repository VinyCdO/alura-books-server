import { getTodosLivros, getLivro, postLivro, deleteLivro, putLivro } from "../servicos/livro.js";

export async function getLivros(req, res) {
  try {
    const livros = await getTodosLivros()
    // console.log(livros);
    res.status(200).json(livros)    
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}

export async function getLivroPorId(req, res) {
  try {
    const id = req.params.id;    
    const livro = await getLivro(id)
    res.status(200).json(livro)
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}

export async function postNovoLivro(req, res) {
  try {
    const novoLivro = req.body;
    const livroInserido = await postLivro(novoLivro)
    res.status(201).json(livroInserido)
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}

export async function deleteLivroPorId(req, res) {
  try {
    const id = req.params.id;    
    const livroDeletado = await deleteLivro(id)
    res.status(204).json(livroDeletado)
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}

export async function atualizaLivro(req, res) {
  try {
    const id = req.params.id;    
    const livro = req.body;    
    const livroAtualizado = await putLivro(id, livro)
    res.status(200).json(livroAtualizado)
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}