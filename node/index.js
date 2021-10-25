const axios = require("axios");

const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";

const isChinese = (f) => f.pais === "China";

const isWoman = (f) => f.genero === "F";

const smallSalary = (f, Acf) => {
  return f < Acf ? f : Acf;
};

const data = axios.get(url).then((response) => {
  const data = response.data;
  const womanChinese = data
    .filter(isChinese)
    .filter(isWoman)
    .reduce(smallSalary);
  console.log(womanChinese);
});

const woman = data;
