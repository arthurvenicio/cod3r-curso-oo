class Product {
  constructor(name, valor, desc) {
    this.name = name;
    this.description = desc;
    this.value = valor;
  }

  get Name() {
    return this.name;
  }

  set Name(name) {
    this._name = name;
  }

  get Valor() {
    return this.value;
  }

  get Description() {
    return this.description;
  }

  set Description(desc) {
    this.description = desc;
  }
}

module.exports = Product;
