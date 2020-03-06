/* Usando o Objeto Math Para calculos Matematicos */

//Math.PI;-- Valor de PI = 3,14
//Math.pow(2,2);--Pontecia de um numero
//Math.sqrt(81);--Raiz Quadradada
//Math.abs(-1);--Valor absoluto de um numero
//Math.round(3.9);--Arredonda o numero
//Math.ceil(3.1);--Arredonda para cima
//Math.floor(3.9);--Arredonda para baixo
//Math.round(Math.random()*100);--gera um numero aleatório

var regex = new RegExp("Rodrigo", "i");//Verifica se existe a palavra Rodrigo, sendo maiusculo ou menusculo
var nome = "jacinto jacinto RODRIGO silva rodrigo santo RodRigo";

/*Funções */
//exec();--Retorna a palavra caos seja encontraod na busca
//test();--Reotorna true ou false caso encontre a palavra
// nome.match(/rodrigo/ig);-- Metodo da String que pode passar uma Expressão Regular como parametro

/*Meta Caracteres */
// i analisa a palavra disconsiderando maisusculo e menusculo
// g retorna todos os casos da palavra desejada
// /./.test("@");--Retorna true para qualquer tipo de caracter encontrado
// /\d/.test("23");-- Retorna True caso ache numeros
// /\s/.test("Rodrigo 10");--Retrona true caso exista espaços na String
// /\w/.test("Rodrigo 10");--Procura qualquer caracter de A á Z e de 0 á 9, e underline "_"
// /^10/.test();-Procura pela ocorrencia do numero 10 no começo da String
// /10$/.test();-Procura pela ocorrencia do numero 10 no fim da String

var regex1 = /rodrigo/i;
alert(/10$/.test("10Rodrigo10"));

/* PADRÃO PARA VALIDAR UM CEP */

//alert("VALIDANDO CEP: "+ /^\d\d\d\d\d\-\d\d\d$/.test("56820-000"));


/* QUANTIFICADORES */

//alert(/\d*/.test("Rodrigo"));--0 ou mais digitos encontrados, sempre vaiser TRUE
//alert(/\d+/.test("Rodrigo"));-- 1 ou mais digitos encontrados.
//alert(/\d{2}/.test("Rodrigo20"));-- Procura por dois digitos.{min, max}
//alert(/\d{2}/.test("rodrigo100"));--Procura por dois numeros

//MELHORANDO O CEP
//alert(/^\d{5}\-\d{3}$/.test("56820-000"));

//VALIDANDO DATA
//alert(/\d{2}\/\d{2}\/\d{2,4}/.test("09/09/1992"));

//VALIDANDO EMAIL
//alert(/\w+@\w+\.\w{2,3}/.test("rodrigojacinto16@gmail.com"));

//CARACTERES OPCIONAIS
//alert(/c[ae]u/.test("ceu"));


//BUSCAS E SUBSTITUIÇÕES
var troca = "Rodrigo awklqwuhf Rodrigo wekjwehfoi RODRIGO";
alert(troca.replace(/rodrigo/ig, "Encontrado"));
