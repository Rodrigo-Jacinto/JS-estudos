/*
Recuperar elementos do HTML
document.getElementById("ID DO ELEMENTO HTML");
document.getElementsByTagName("Nome da Tag do ELEMENTO HTML");
document.getElementsByClassName('NOME DA CLASSE');
document.getElementsByName("NOME");
document.querySelector("selector css desejado. Ex:. p > a");
*/


//Forma de recuperar COLEÇÕES
var todasIamgens = document.images; //Retorna todas as imagens
var img = document.images[0];
img = document.images.item(0);
img = document.images.namedItem("dis");

alert(document.images);
alert(img);
//Modificando coleções
var link = document.links[0];
link.href = "http://www.google.com.br";
link.target = "_blink";

alert(document.links.length /* Diz a quantidade de links existentes */);

//table

var btnAdiciona = document.getElementById("adiciona");
var btnRemove = document.getElementById("del");

btnAdiciona.onclick = function()
{
  var imagens = document.images;
  for(var i = 0; i < imagens.length; i++)
  {
    criaLinha(imagens[i].src, imagens[i].alt);

  }
}//fim onclick


btnRemove.onclick = function()
{
  var tabela = document.getElementsByTagName("table").item(0);
  tabela.deleteRow(1);

}//fim onclick

function criaLinha(texto1, texto2)
{
  var tabela = document.getElementsByTagName("table").item(0);
  var linha = tabela.insertRow(-1);
  var cel0  = linha.insertCell(0);
  var cel1  = linha.insertCell(1);
  cel0.appendChild(document.createTextNode(texto1));
  cel1.appendChild(document.createTextNode(texto2));
}//fim onclick
