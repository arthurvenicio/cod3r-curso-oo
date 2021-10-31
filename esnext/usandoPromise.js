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

let nomes = [];

// getAluno("A").then((alunos) => {
//   alunos.map((aluno) => {
//     nomes.push(`A : ${aluno.nome}`);
//   });

//   getAluno("B").then((alunos) => {
//     alunos.map((aluno) => {
//       nomes.push(`B : ${aluno.nome}`);
//     });

//     getAluno("C").then((alunos) => {
//       alunos.map((aluno) => {
//         nomes.push(`C : ${aluno.nome}`);
//       });
//       console.log(nomes);
//     });
//   });
// });

Promise.all([getAluno("A"), getAluno("B"), getAluno("C")])
  .then((turmas) => [].concat(...turmas))
  .then((alunos) => alunos.map((aluno) => aluno.nome))
  .then((nomes) => console.log(nomes))
  .catch((e) => console.log(e.message));
