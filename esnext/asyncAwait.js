const http = require("http");

const getAluno = (letra) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let result = "";

      res.on("data", (dados) => {
        result += dados;
      });

      res.on("end", () => {
        try {
          resolve(JSON.parse(result));
        } catch (error) {
          reject(error);
        }
      });
    });
  });
};

const obterAlunos = async () => {
  const turmaA = await getAluno("A");
  const turmaB = await getAluno("B");
  const turmaC = await getAluno("C");

  return [...turmaA, ...turmaB, ...turmaC];
};

obterAlunos()
  .then((alunos) => alunos.map((aluno) => aluno.nome))
  .then((nomes) => console.log(nomes));
