// Annotation Literals
const obj = {};
console.log(obj);

// Object JS
const ob = new Object();
ob.nome = "Arthur";
console.log(ob);

// Constructor Function
function criarProduto(nome, valor, desconto) {
  this.nome = nome;
  this.getValorComDesconto = () => {
    return valor - valor * desconto;
  };
}

let p1 = new criarProduto("Notebook", 1299.99, 0.15);
let p2 = new criarProduto("Cama", 699.99, 0.23);

console.log(p1.getValorComDesconto(), p2.getValorComDesconto());

// Function Factory
function criariFuncionario(name, salariobase, faltas) {
  return {
    name,
    salariobase,
    faltas,
    getSalarioLiquido() {
      return (salariobase / 30) * (30 - faltas);
    },
  };
}

const joao = criariFuncionario("Locio", 4215, 3);
console.log(joao.getSalarioLiquido());

// Object Create
const filha = Object.create(null);
filha.nome = "Ana";

console.log(filha);

// JSON.parse
const fromJSON = JSON.parse('{"nome": "roberta"}');

console.log(fromJSON.nome);
