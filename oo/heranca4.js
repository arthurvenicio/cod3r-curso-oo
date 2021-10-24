String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

console.log("Escola Cod3r".reverse());

Array.prototype.first = function () {
  return this[0];
};

console.log([1, 2, 3, 4, 5].first());

String.prototype.toString = function () {
  // Pode fazer, porém é muito arriscado
  return "Fudeu tudo";
};

console.log("Teste".reverse());
