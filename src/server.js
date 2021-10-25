const express = require("express");
const Product = require("./models/product.model");
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const bd = require("./bd");
const result = {};

const getConsole = (req, res, next) => {
  result.status = "Sucess";
  next();
}; // Middleware Function

const addProduct = (req, res) => {
  const name = req.body.name;
  const description = req.body.desc;
  const valor = req.body.value;

  const product = new Product(name, valor, description);

  const add = bd.salvarProduto(product);

  res.status(201).send({ ...result, ...product });
};

const getProduct = (req, res, next) => {
  const data = bd.getProduto(req.query.id);
  res.send({ ...data });
};

const getProducts = (req, res) => {
  res.send(bd.getProdutos());
};

app.post("/produto", getConsole);
app.post("/produto", addProduct);
app.get("/produto", getProduct);
app.get("/produtos", getProducts);

const port = 8080;

app.listen(port, () => console.log(`Estou rodando em localhost:${port}`));
