function gerarNumerosEntre(min, max, numProibidos) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve, reject) => {
    const random = parseInt(Math.random() * (max - min + 1) + min);

    if (numProibidos.includes(random)) {
      reject("Numero repetido");
    } else {
      resolve(random);
    }
  });
}

async function gerarMegaSena(qtdNumero) {
  try {
    const numeros = [];
    for (let _ of Array(qtdNumero).fill()) {
      numeros.push(await gerarNumerosEntre(1, 60, numeros));
    }

    return numeros;
  } catch (error) {
    throw new Error(error);
  }
}

gerarMegaSena(8).then(console.log).catch(console.log);
