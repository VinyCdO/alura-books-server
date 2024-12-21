import express from "express";
import rotaLivros from "./rotas/livros.js";
import rotaFavoritos from "./rotas/favoritos.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({origin: "*"}));

const port = 8000;

app.use(bodyParser.json());

app.use("/livros", rotaLivros);
app.use("/favoritos", rotaFavoritos);

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
});
