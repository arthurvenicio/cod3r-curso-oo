// Estrutura Map

const tecnologias = new Map();

tecnologias.set("react", { framework: false });
tecnologias.set("angular", { framework: true });

// Obter valor
console.log(tecnologias.get("react"));

const chavesVariadas = new Map([
  [function () {}, "Função"],
  [{}, "Objeto"],
  [123, "Numero"],
]);

chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl);
});

// Verificar o tamanho
console.log(chavesVariadas.size);

// Verifica se tem o atributo
console.log(chavesVariadas.has(123));

// Deleta o atributo
chavesVariadas.delete(123);

// Verifica se tem o atributo
console.log(chavesVariadas.has(123));

// Verificar o tamanho após o delete
console.log(chavesVariadas.size);
