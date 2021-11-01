function gerarNumerosEntre(min, max, tempo) {
  if (min > max) {
    [max, min] = [min, max];
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      const random = parseInt(Math.random() * (max - min + 1) + min);
      resolve(random);
    }, tempo);
  });
}

function gerarVariosNumeros() {
  return Promise.all([
    gerarNumerosEntre(1, 60, 4000),
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 2000),
    gerarNumerosEntre(1, 60, 2500),
    gerarNumerosEntre(1, 60, 3500),
  ]);
}

function isMaiorDez(value) {
  return value >= 10;
}

gerarVariosNumeros()
  .then((numeros) => numeros.filter(isMaiorDez))
  .then(console.log);
