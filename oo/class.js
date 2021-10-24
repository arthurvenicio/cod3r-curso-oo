class Lanacamento {
  constructor(name, valor) {
    this.name = name;
    this.valor = valor;
  }

  name() {
    return this.name;
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes;
    this.ano = ano;
    this.lancamentos = [];
  }

  addLancamentos(...lancamentos) {
    lancamentos.forEach((l) => this.lancamentos.push(l));
  }

  sumario() {
    let valorConsolidado = 0;
    this.lancamentos.forEach((l) => {
      valorConsolidado += l.valor;
    });
    return valorConsolidado;
  }
}

const salario = new Lanacamento("Salario", 2500);
const agua = new Lanacamento("Agua", -80);
const energia = new Lanacamento("Energia", -134);

const contas = new CicloFinanceiro(6, 2021);
contas.addLancamentos(salario, agua, energia);

console.log(contas.sumario());
console.log(salario);
