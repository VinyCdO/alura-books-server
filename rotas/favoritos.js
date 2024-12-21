import Router from "express";
import { getFavoritos, getFavoritoPorId, postNovoFavorito, deleteFavoritoPorId } from "../controladores/favoritos.js";

const router = Router();

router.get("/", getFavoritos);

router.get("/:id", getFavoritoPorId);

router.post("/", postNovoFavorito);

router.delete("/:id", deleteFavoritoPorId)

export default router;