function funcionarOuNao(value, chanceError) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceError) {
      reject("Ocorreu um erro!");
    } else {
      resolve(value);
    }
  });
}

funcionarOuNao("Testando", 0.35)
  .then((v) => `Valor: ${v}`)
  .then(
    (v) => consol.log(v),
    (err) => console.log(`Erro Especificio: ${err}`) // é possivel tratar o error dentro do .then, e aqui não é chamado o .catch, mas nao havera valor disponivel para os proximos .then
  )
  .catch((error) => console.log(`Erro: ${error}`)) // Depois daqui nenhum valor é passado, por exemplo no proximo .then não vai ser obitido nenhum valor.
  .then(console.log("Fim"));

// é interessante colocar o .catch somente no fim, para trata de modo geral o problema de todos os fluxos
