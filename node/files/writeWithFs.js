const fs = require("fs");

const conteudo = {
  name: "Arthur",
  age: 19,
  city: "Santa Cruz do Capibaribe",
};

fs.writeFile(
  __dirname + "/arquivoGerado.json",
  JSON.stringify(conteudo),
  (err) => {
    console.log(err || "Arquivo salvo com sucesso...");
  }
);
