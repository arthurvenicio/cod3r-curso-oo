const http = require("http");

const getAluno = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  http.get(url, (res) => {
    let result = "";

    res.on("data", (dados) => {
      result += dados;
    });

    res.on("end", () => {
      callback(JSON.parse(result));
    });
  });
};

let nomes = [];

getAluno("A", (alunos) => {
  alunos.map((aluno) => {
    nomes.push(`A : ${aluno.nome}`);
  });
  getAluno("B", (alunos) => {
    alunos.map((aluno) => {
      nomes.push(`B : ${aluno.nome}`);
    });

    getAluno("C", (alunos) => {
      alunos.map((aluno) => {
        nomes.push(`C : ${aluno.nome}`);
      });
      console.log(nomes);
    });
  });
});
