const pai = { nome: "Pedro", corCabelo: "Preto" };

const filha1 = Object.create(pai); // Pai é o objeto prototipo para este novo objeto
filha1.nome = "Ana";

const filha2 = Object.create(pai, {
  nome: { value: "Bia", writable: false, enumerable: true }, // Passando valor e propriedades
});

// console.log(filha1.nome);
// console.log(filha2.nome);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for (let key in filha1) {
  filha1.hasOwnProperty(key)
    ? console.log(key)
    : console.log(`Por herança : ${key}`);
}
