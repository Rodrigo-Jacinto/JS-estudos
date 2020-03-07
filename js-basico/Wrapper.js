/*Objetos Boolean */

var x = true; //Criando um booelan de tipo primitivo
var y = new Boolean();//Criando um booleando do tipo objeto
/*
Pode ser passados como parametro no objeto

0 - false
1 - true

false
true

"" - false
e não passar nenhum parametro, onde vai ser false por padrão.

valueOf() - retorna o valor em tipo primitivo
toString() - retorna o valor em tipo string
*/
var resultado = new Boolean(1);
alert(typeof(resultado.toString()));

  /* Objeto Number */

var numero = new Number("12.128");

numero.toFixed();//Determina a precisão de casas decimais
numero.toPrecision();//Determina o tamanho do numero
numero.toString();//retorna o valor em tipo string
alert(numero.toFixed(1));

/* Objeto String */

 var frase = new String("Escrevendo js na pigna com a função Writeln do js");
 document.writeln("<a href='#' style='color:red';>"+frase+"</a><br />"+"show");

 var tam = frase.length;//Tamanho da String
 var letra = frase.charAt(2);//Metodo que retorna a letra que está em um determinado indice
 var cont = frase.concat(" Rodrigo");//Contatena uma string dentro de outra
 var ind = frase.lastIndexOf("js");//mostra o indice de onde começa tal frase
 var muda = frase.replace("js", "javascript")//Troca a primeira ocorrencia encontrada da frase
 var corta = frase.substring(0,6);//Corta a string mostrando o inicio e o fim da frase cortada
 var corta2 = frase.substr(0,6);
 var corta3 = frase.slice(0,6);
 var colecao = frase.split(" ");//Quebra a string com um caracter informado,transformando em um array de
 var minusculo = frase.toLowerCase();//Tudo minusculo
 var maiusculo = frase.toUpperCase();//Tudo Maiusculo
 var resultado = frase.localeCompare("rodrigo");// compara se duas strings são iguais
 alert(maiusculo);

 /* Outro metodos que n são mt utilizados */
document.writeln(frase.link());
document.writeln(frase.sup());
document.writeln(frase.bold());

// FUNÇÕES DE ARRAY
var frutas = new Array("Manga", "Pera",123,"Maça", "Banda");

function todos(elemento, indice, obj)
{
  return typeof elemento == "string";
}

function todos2(elemento, indice, obj)
{
  return (elemento.indexOf("an") > 0);
}

function todos3(elemento, indice, obj)
{
  return (elemento += "javascript");
}


alert("Função Filter: "+ frutas.map(todos3) );


/* Verifica se todos os tipos são do mesmo tipos
    every();
*/

/* Veirfica se á pelo menos um objeto do tipo especificado
    some();
*/

/* Modifica os valores
  map();
*/
