//Definição de Objeto sem precisar de classe

pessoa = {
  nome: "Rodrigo", //Definição de propriedades
  idade: 24,
  lista: function() {
    return this.nome + " " + pessoa.idade;
  }, //Definição de metodo
  iden() {
    return "Eu sou pessoa fisíca";
  } //Nova forma de definir metódos
};

pessoa.cpf = "101.845.994-40"; // Definindo um nova propriedade para o objeto

pessoa.alo = function() {
  return "Alo mundo";
}; //Definição novo metodo para o objeto

//passar variáveis para objeto literal e já declara como propriedade e valor

let modelo = "Fiat",
  ano = 2010;

const tipo = () => {
  console.log("Eu sou um carro");
};
carro = { modelo, ano, tipo };

//verifica se a propriedade existe no objeto, retorna true ou false
console.log(carro.hasOwnProperty("modelo"));
