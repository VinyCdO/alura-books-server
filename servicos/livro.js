import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbconfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosLivros() {
  const db = conexao.db("alura-books");

  const colecao = db.collection("livros");

  return colecao.find().toArray();
}

export async function getLivro(id) {
  const db = conexao.db("alura-books");

  const colecao = db.collection("livros");

  const objId = ObjectId.createFromHexString(id);

  return colecao.findOne({_id: objId});
}

export async function postLivro(novoLivro) {
  const db = conexao.db("alura-books");

  const colecao = db.collection("livros");

  return colecao.insertOne(novoLivro);
}

export async function deleteLivro(id) {
  const db = conexao.db("alura-books");

  const colecao = db.collection("livros");

  const objId = ObjectId.createFromHexString(id);

  return colecao.deleteOne({_id: objId});
}

export async function putLivro(id, livro) {
  const db = conexao.db("alura-books");

  const colecao = db.collection("livros");

  const objId = ObjectId.createFromHexString(id);

  return colecao.updateOne({_id: objId}, {$set:livro});
}