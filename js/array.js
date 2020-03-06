/* Objetos Array */

/*Array de duas dimensoes
var nomes = new Array();
nomes[0] = new Array("Rodrigo", "jacinto");
*/
var no = ['rodrigo', 'robson'];
no.push(10); //Adiciona no fim do Array
no.pop(); //Remove no fim do array

no.unshift('jacinto'); //Adiciona no inicio do array;
no.shift(); //remove no inicio do array

//remove o valor de um indice específico
// primeiro parâmetro diz o indice de qual item quer excluir
// segundo parametro diz quantos itens serão excluídos
no.splice(0, 1); // nesse caso só o item 'rodrigo' será excluído

//retorna o primeiro indice do item que satisfaça a condição.
const indice = no.findIndex(valorArray => {
  return valorArray === 'robson';
});

//retorna o item que satisfaça a condição.
const valor = no.find(valorArray => {
  return valorArray === 'robson';
});

/* Array Declarativo */
var nomes = [
  ['Rodrigo', 'jacinto'],
  ['Robson', 'Silva']
];

alert('Array: ' + nomes[1][1]);

//  Array Associativo

var lP = { lg: 'java', lg2: 'c++' };

//Podemos acessar
lP['lg2'];
lP.lg;

alert('Array Associativo: ' + lP.lg);

//  ---  Métodos do Array -----
arr = ['r', 'o', 'd', 'r', 'i', 'g', 'o'];

var re = arr.reduceRight(function(acumulado, valor) {
  return acumulado + valor;
});

var re = arr.reduce(function(acumulado, valor) {
  return acumulado + valor;
});

arr.indexOf('r'); //retorn o indice começando do começo - 0
arr.lastIndexOf('r'); //retorna indice começando do final - 3
Array.isArray(arr); //verifica e se é uma Array e retorna boolean

var lista = [1, 2, 3, 4, 5, 6, 7];

lista.filter(function(valor) {
  return valor < 4; //Retorna um subconjunto do array dependendo da condição que é posta;
});

lista.forEach(function(valor, indice, list) {
  //console.log("Valor: " + valor + " - Indice: " + indice + " - Array: " + list);
});
//Verifica todos os valores do Array
var every = lista.every(function(valor) {
  return valor < 8; //Todos os valores do Array são menores que 8? retorna true
});

//procura pelo menos por valor
var some = lista.some(function(valor) {
  return valor > 6; //Algum valor é maior do 6? retorna true
});

console.log(some);
