function gerarNumerosEntre(min, max) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve) => {
    const random = parseInt(Math.random() * (max - min + 1) + min);
    resolve(random);
  });
}

gerarNumerosEntre(10, 11).then(console.log);
