function Aula(nome, id) {
  this.nome = nome;
  this.Aulaid = id;
}

const aula1 = new Aula("Fernandes", 123);

console.log(aula1);

// Criando o proprio operador new
function novo(f, ...params) {
  const obj = {};
  obj.__proto__ = f.prototype;
  f.apply(obj, params);
  return obj;
}

const aula4 = novo(Aula, "Aula4", 321);
const aula5 = novo(Aula, "Aula5", 322);

console.log(aula4);
console.log(aula5);
