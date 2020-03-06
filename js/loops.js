var op = 0;
while(op < 10){
  alert("Laço while:"+ op);
  op++;
}

do {
  alert("Executado pelo menos uma vez !");
}while(false);

while(true){
  var numero = prompt("Digite um numero");
  if((numero % 2) == 0){
    alert("Um numero par foi digitado, finalizando laço while");
    break;
  }

}

for(let i = 0; i <10; i++)
{
    alert(i);
}

var texto = "";

for(let i = 0; i <= 20; i++)
{
      if((i % 2) == 0)
      {
        if(i == 20){
        texto += i;
        break;
      }
        texto += i +",";

      }
}

var nomes = new Array("Rodrigo", "Robson", "Elias");

for(var i = 0; i < nomes.length/*Diz o tamanho do array */; i++)
{
    alert(nomes[i]);
}

/* -- foreach -- */
var Carros = {
      Nome:"Ferrari",
      Marca:"Italian-cars",
      Ano:2016
}

for(var carro in Carros){

    alert(carro +": "+ Carros[carro]);
}

/* -- foreach -- */

var sobrenomes = new Array("Jacinto", "Silva");

for(var sobrenome in sobrenomes)
{
  alert(sobrenomes[sobrenome]);
}


/* -- Metodos do Array -- */

var lista = [1,2,3,4,5,6,7];

lista.forEach(function(valor, indice, list){
  //console.log("Valor: " + valor + " - Indice: " + indice + " - Array: " + list);
})
//Verifica todos os valores do Array
var every = lista.every(function(valor){

  return valor < 8; //Todos os valores do Array são menores que 8? retorna true
})

//procura pelo menos por valor
var some = lista.some(function(valor){
    return valor > 6;//Algum valor é maior do 6? retorna true
})

console.log(some);
