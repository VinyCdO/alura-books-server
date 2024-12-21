import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbconfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosFavoritos() {
  const db = conexao.db("alura-books");

  const colecao = db.collection("favoritos");

  // return colecao.find().toArray();
  return colecao.aggregate([
    {
      $lookup: {
        from: "livros",
        localField: "livro_id",
        foreignField: "_id",
        as: "livro"
        }
    },
    { $unwind: { path: "$livro", preserveNullAndEmptyArrays: true } }, // Correção IMPORTANTÍSSIMA aqui!
    {
      $project: {
        _id: 1,
        'livro.nome': 1
      }
    }
  ]).toArray();
}

export async function getFavorito(id) {
  const db = conexao.db("alura-books");

  const colecao = db.collection("favoritos");

  const objId = ObjectId.createFromHexString(id);

  return colecao.findOne({_id: objId});
}

export async function postFavorito(novoFavorito) {
  const db = conexao.db("alura-books");

  const colecao = db.collection("favoritos");

  const { livro_id } = novoFavorito;
  const livroObjId = ObjectId.createFromHexString(livro_id);
  const novoFavoritoComObjId = { ...novoFavorito, livro_id: livroObjId };

  return colecao.insertOne(novoFavoritoComObjId);
}

export async function deleteFavorito(id) {
  const db = conexao.db("alura-books");

  const colecao = db.collection("favoritos");

  const objId = ObjectId.createFromHexString(id);

  return colecao.deleteOne({_id: objId});
}
