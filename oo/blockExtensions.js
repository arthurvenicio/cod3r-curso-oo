const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "Promoção",
});

console.log(produto);

produto.nome = "Mariola";
produto.descricao = "A tipical brazilian candy";

console.log(produto);
delete produto.tag;
console.log(produto);

//Object.seal (Impossibilita de adicionar ou apagar propriedades)
const pessoa = {
  nome: "Guilherme",
  age: 15,
};
Object.seal(pessoa);
console.log(pessoa);
delete pessoa.nome;
console.log(pessoa);
