//Criando uma Class
class Pessoa {
  // Construtor e suas propriedades
  constructor(nome, idade, id = 0) {
    this.nome = nome;
    this.idade = idade;
    this.id = id;
  }
  //Metódo
  toString() {
    return `Nome: ${this.nome} \n Idade: ${this.idade} \n Id: ${this.id}`;
  }

}

//Herdando atributos e metodos da class Pessoa
class PessoaF extends Pessoa {
  constructor(nome, idade, cpf) {
    super(nome, idade);
    this.cpf = cpf
  }

  //Metódo estático, pertencente a classe
  static msg() {
    console.log("Olá Mundo");
  }

}

//Atributos privados
class Time {
  
  constructor(nomeTime, idade, cores) {
    var wm = new WeakMap();
    wm.set(this, {nomeTime,idade,cores});
  }

  getPropriedade(att) {
      return wm.get(this)[att];
  }

  getIdade() {
      return wm.get(this).idade;
  }

  setIdade(novovalor) {
    wm.get(this).idade = novovalor;
  }

}


// var p = new Pessoa('Robson', 28, 100);
// console.log(p.toString());
 var t = new Time('Barcelona', 26, 'tricolor-royal');

 console.warn(t.getIdade());