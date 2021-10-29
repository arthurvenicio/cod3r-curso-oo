// Set: Estrutura Não indexada e não aceita repetição

const times = new Set();

times.add("Vasco");
times.add("Flamengo");
times.add("Corithians");
times.add("Gremio");
times.add("Ypiranga");
times.add("Sport Recife");
times.add("Sport Recife"); // Vai apenas ignorar, por se tratar de uma repetição

console.log(times);

// Verificar o tamanho
console.log(times.size);

// Verifica a existencia do atributo
console.log(times.has("Ypiranga"));

// Criando aparti de uma Array
const nomes = ["Ana", "Karol", "Erika", "Eduarda"];

const nomesSet = new Set(nomes);

console.log(nomesSet);
console.log(nomesSet.size);
