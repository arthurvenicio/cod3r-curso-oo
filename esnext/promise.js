function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase);
    }, segundos * 1000);
  });
}
// .then -> Trata uma resposta esperada
// .catch -> Trata uma resposta inesperada, ou um erro!

falarDepoisDe(3, "Teste").then((i) => console.log(i));
