class Pessoa {

  constructor(nome, endereco) {
    this.nome = nome;
    this.endereco = endereco;
  }

  toString() {
    return`Nome: ${this.nome} \nIdade: ${this.endereco}`;
  }
}

//Usando Extends para herdar da classe Pessoa
class Pessoa_fisica extends Pessoa {

  constructor(cpf, nome, endereco) {
    super(nome,endereco); // Passando as propriedades para o constructor de Pessoa
    this.cpf = cpf;
  }

  //Sobescrevendo o metodo pai
  toString() {
    return `Nome: ${this.nome} \nIdade: ${this.endereco} \nCPF: ${this.cpf}`;
  }
}

var p_f = new Pessoa_fisica(123,'Rodrigo','Otavio vasco');
console.log(p_f.toString());
