/* Função Declarativa*/
function soma1(x, y) {
  return x + y;
}

/* Função Anônima */
var soma2 = new Function("x", "y", "alert(x+y)");
//alert(soma2(10,10));

/* Função Literal */
var soma3 = function(x, y) {
  alert(x + y);
};

/* Utilizando a forma declarativa */

function test() {
  alert("Usando a forma Declarativa");
}

function argumentos() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
//argumentos(1, 2, 3, "Rodrigo", true, null);

/* Utilizando a forma literal */

var anonima = new Function("alert('Função Anonima')");

/*
window.onload = function() {
  document.getElementById("l").onclick = function() {
    alert("Usando funções Literal");
  };

  document.getElementById("a").onmouseover = anonima();
};
*/

function nome(nome, sobrenome) {
  return `Meu nome completo é: ${nome + " " + sobrenome}`;
}

console.log(nome("rodrigo", "jacinto"));
