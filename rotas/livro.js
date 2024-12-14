import Router from "express";
import { getLivros, getLivroPorId, postNovoLivro, deleteLivroPorId, atualizaLivro } from "../controladores/livros.js";

const router = Router();

router.get("/", getLivros);

router.get("/:id", getLivroPorId);

router.post("/", postNovoLivro);

router.put("/:id", atualizaLivro)

router.delete("/:id", deleteLivroPorId)

export default router;