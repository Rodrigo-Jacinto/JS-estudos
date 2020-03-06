//Definição de Objeto sem precisar de classe

pessoa = {
  nome: "Rodrigo", //Definição de propriedades
  idade:24,
  lista: function(){ return this.nome + ' ' + pessoa.idade} //Definição de metodo
}

pessoa.cpf = "101.845.994-40"; // Definindo um nova propriedade para o objeto
pessoa.alo = function(){ return 'Alo mundo';} //Definição novo metodo para o objeto
