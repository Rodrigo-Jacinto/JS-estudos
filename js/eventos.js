
/*
  Tipos de Eventos
  onclick(); Quando clica no elemento
  onmouseover(); passar o mouse por cima do elemento
*/

/*
    Recuperar elementos do HTML
    document.getElementById("ID DO ELEMENTO HTML");
    document.getElementsByTagName("Nome da Tag do ELEMENTO HTML");
    document.getElementsByClassName('NOME DA CLASSE');
    document.getElementsByName("NOME");
    document.querySelector("selector css desejado. Ex:. p > a");
    document.querySelectorAll("div") // Retorna todos os elementos em array
*/

document.getElementById("imagem").onclick = function () {
  this.src = "img/on.png";
}

/* Tipos de Variaveis */
document.getElementById("btn").onclick = function () {

  var nome = 'Rodrigo'; // Tipo String
  var idade = 24;// Tipo number
  var casado = false;// Tipo boolean

  alert("Nome: " + nome + "\nIdade: " + idade + "\nCasado: " + casado);

  // OUTROS TIPO DE VARIAVEL

  var other;//Undefined
  other = null; //Valor nulo
  other = 3 * "pessoa";// Não é numero NaN

  const HORAS_DO_DIA = 24;//Criação de constantes

  alert(other + "\n" + HORAS_DO_DIA);
}


function pegaDados() {

  var nome = window.prompt("Qual é seu nome ?");
  alert("Seja Bem-vindo " + nome);

}


function operadoresMatematicos() {

  /* Operadores de Atribuição

      +=
      -=
      *=
      /=
      %=

    Mesma coisa que x = x + 6
  */

  var numero1 = prompt("Digite um valor");
  var numero2 = prompt("Digite outro valor");

  var resultadoSoma = +numero1 + (+numero2);
  var resultadoMulti = numero1 * numero2;
  var resultadoSub = numero1 - numero2;
  var resultdoDiv = numero1 / numero2;
  var resultadoMod = numero1 % numero2;

  alert("Resultados:\n soma: " + resultadoSoma + "\nSubtração: " + resultadoSub + "\nMultiplicação: " + resultadoMulti + "\nDivisão: " + resultdoDiv + "\nMódulo: " + resultadoMod);


}

function operadoresComparacao() {

  /*
   == igualdade
   != diferente
   > maior
   < menor
   >= maior e igual
   <= menos e igual

  */
  var x = 10;
  alert(x === 10);//Compara se á igualdade entre os objetos

  var y = 10;
  alert(y !== "10");//Compara se á diferença entre os objetos

}

function operadoresLogicos() {
  /*
   && = verdadeiro && verdadeiro
   || = verdadeiro || falso
   ! = inverte o estado ex: !(true) = false;
   */
}

function operadoresEspeciais() {

  Pessoa = {
    nome: "Rodrigo"
  }

  var idade = 15;

  var resultado = (idade >= 18) ? "Maior de Idade" : "Menor de Idade";

  alert("Operador Ternário: " + resultado);

  var verifica = "nome" in Pessoa; //Verifica se existe determinado atributo no objeto pessoa
  alert("in: " + verifica);


  alert(Pessoa.nome);
  delete Pessoa.nome;//Deleta o valor do atributo do Objeto
  alert(Pessoa.nome);

  var idade = new Number(10);

  var instancia = idade instanceof Number;//Verifica se objetos são da mesma instancia
  alert("Instanceof: " + instancia);

  var tipo = typeof (instancia);//Verificar o tipo da variavel,objeto
  alert("Typeof: " + tipo);

}
