const seq = {
  _valor: 1,
  get valor() {
    return this._valor++;
  },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor;
    }
  },
};

console.log(seq.valor);
seq.valor = 1000;
console.log(seq.valor);
console.log(seq.valor);
