import express from "express";
import rotaLivro from "./rotas/livro.js";
import bodyParser from "body-parser";

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.use("/livros", rotaLivro);

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
});
