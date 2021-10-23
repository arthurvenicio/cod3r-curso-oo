const obj = { nome: "Silva" };
console.log(obj);
obj.nome = "Souza";
console.log(obj);

//Nesse momento congela o objeto, alterações daqui pra baixo seram ignoradas
Object.freeze(obj);

obj.nome = "ferreira";
console.log(obj);

// Verifica se o objeto está congelado
console.log(Object.isFrozen(obj));

//Criando uma variavel que não pode mudar e um objeto que não pode mudar
const objf = Object.freeze({ nome: "luiza" });

console.log(objf.nome);
