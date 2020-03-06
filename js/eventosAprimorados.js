window.onload = function() {

  var botao =  document.getElementById("btn");
  var meuNome = "Rodrigo";
  //botao.onclick = function() {eventao();}//UTLIZANDO A FORMA DOM NIVEL 0
  botao.addEventListener("click", function(evt){//UTLIZANDO A FORMA DOM NIVEL 2
    eventao(meuNome);
    alert(evt.type);//ACESSANDO O OBJETO EVENTO E UTILIZANDO USA PROPRIEDADES
  });//UTLIZANDO A FORMA DOM NIVEL 2

  document.getElementById("btn2").onclick = function(){
    alert(this.href);//THIS refere-se ao btn2, sem precisa atribuir variavel
  }

  //Melhor forma de usar addEventListener
  function on(elemento, evento, funcao) {
    document.querySelector(elemento)
    .addEventListener(evento, funcao, false);
  }


  //USANDO FUNÇÕES E ATRIBUTOS DO OBJETO NAVEGADOR BOM
  window.alert("Janela do Navegador");
  window.prompt("Janela Pormpt");
  window.confirm("Janela confirma");
  //USANDO FUNÇOES NAVIGATOR
  alert(window.navigator.userAgent);
  alert(window.navigator.platform);
  alert(window.navigator.language);

  var plugs = navigator.plugins;
  var pl = "";

  for(var i = 0; i < plugs.length; i++)
  {
    pl+= plugs[i].name + "\n";

  }
  alert(pl);
  document.getElementById("texto").innerHTML = "Usando INNERHTML";

  //TESTANDO OS EVENTOS

  var texto = document.getElementById("nome");

  texto.addEventListener("keypress", function(){
    alert("Você pressionou um botao no teclado");
  });
  document.getElementById("ver").addEventListener("click", function(){

    alert(texto.value);
  });

}

function eventao(nome) {
  alert(nome);
}
