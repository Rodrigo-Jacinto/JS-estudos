function dividi (x, y) {
  return a = x/y;
}

/*Condição if/else */

function idade()
{
var idade = prompt("Digite uma Idade");

if(idade >= 18 )
{
  alert("Você é maior de Idade !!");
}

else
{

  alert("Você é menor de idade");

  }

}

  function idade_melhorada()
  {
    var idade = prompt("Digite sua idade");

      if(idade >= 1 && idade <= 12 )
      {
          alert("Você é uma Criança");
      }

      else if(idade >=13 && idade <= 17)
      {
          alert("Você é um pré-adolescente");

      }

      else if(idade >=18 && idade <= 21)
      {

        alert("Você é um adolescente");
      }

      else if(idade > 21){

          alert("Você é um Adulto");

      }

      else
      {
          alert("Idade não identificada");

      }

  }//Fim da Function

function par_impar()
{

    var numero = prompt("Digite um número");

    if((numero % 2) == 0)
    {
        alert("O número " + numero + " é par.");
    }

    else
    {
      alert("O número "+ numero + " é impar.");
    }

}

function aprovado_reprovado()
{

      var nota = prompt("Digite a nota do aluno");

      if(nota >= 7)
      {
          alert("Parabéns Você foi Aprovado");

      }

      else
      {
          alert("Não foi dessa vez, fica para próxima");
          if(nota == 6)
          {

            alert("Você tera um nova chance na recuperação");

          }
    }
}

//Switch

 var opcao = "m";

switch(opcao)
{
  case "m":{
    alert("Masculino");
    break;
}
  case "f":
    alert("Feminino");
    break;
    default:
    alert("Sexo não identificado");

}

var ling = "mysql";
 switch(ling)
 {
   case "java":
   case "c++":
   case "c":
   case "php":
    alert("Linguagem de Programação");
    break;

    case "mysql":
    case "postgresql":
    case "sqlserver":
      alert("SGBD");
      break;

 }
