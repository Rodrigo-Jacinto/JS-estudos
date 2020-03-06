//Instaciando Objeto de Ajax
var ajax = new XMLHttpRequest();

//Informando tipo de conexão
ajax.open();

//Passando os dados
ajax.send();

// Pega os dados vindo em formato JSON
var dados = JSON.parse(ajax.responseText);

//Evento que verifica quando a Requisição mudar
  ajax.addEventListener('readystatechange', function(){
    console.log("Requisição: " + ajax.readyState + "\n Status: " + ajax.status);
  });

