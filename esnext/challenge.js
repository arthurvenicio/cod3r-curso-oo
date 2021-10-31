const fs = require("fs");

const caminho = __dirname + "/dados.txt";

function getDetails(caminho) {
  return new Promise((resolve) => {
    fs.readFile(caminho, (_, conteudo) => {
      resolve(conteudo.toString());
    });
  });
}

getDetails(caminho).then(console.log);
