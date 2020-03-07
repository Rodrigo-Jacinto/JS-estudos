
/*Capturando Excessões */
try
{
  var x = a;
  var y = x + 10;
  alert(y);
}
catch(erro)
{
    /* Mostrando o Erro */
    alert(erro.name +"="+ erro.message);
    alert(erro.toString());
}
finally{

  alert("A condição Finally sempre será executada");

}

/*Lançando Excessões */

var num = prompt("Digite um numero");

  try
  {
      if(num < 10)
      {
        throw "Numero menor do que 10"; //Lançou uma execessao

      }
  }
  catch(e)
  {

    alert(e);

  }

var Carro = {

  Nome:"Nissan",
  Marca:"Hyundai",
  Pontencia: {
    cavalos:"280 CV",
  }

}

alert(Carro.Pontencia.cavalos);

with(Carro.Pontencia) {

  alert("Dentro do With: "+cavalos);

}
