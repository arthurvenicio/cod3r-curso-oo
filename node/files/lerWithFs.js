const fs = require("fs");

const caminho = __dirname + "/config.json";

const conteudo = fs.readFileSync(caminho, "utf-8");
// console.log(conteudo);

fs.readFile(caminho, "utf-8", (err, conteudo) => {
  const config = JSON.parse(conteudo);
  console.log(`${config.db.host}:${config.db.port}`);
});

const config = require("./config.json");
console.log(config.db);

fs.readdir(__dirname, (err, arquivos) => {
  console.log("Arquivos da pasta...");
  console.log(arquivos);
});
