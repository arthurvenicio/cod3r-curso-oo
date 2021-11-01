function esperarPor(tempo = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Executando promise");
      resolve();
    }, tempo);
  });
}

async function getValorRapido() {
  return 20;
}

async function executar() {
  let valor = await getValorRapido();

  await esperarPor(2000);
  console.log(`Executando uma promise, ${valor}`);
  await esperarPor(2000);
  console.log(`Executando uma promise, ${valor + 1}`);
  await esperarPor(2000);
  console.log(`Executando uma promise, ${valor + 2}`);

  return valor + 3;
}

const valor = executar().then(console.log);
