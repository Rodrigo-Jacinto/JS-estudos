window.onload = function () {

  document.getElementById("lampada").addEventListener("click", function () {
    ligar();
    alert(localStorage.getItem("seuNome"));
    setTimeout(desligar, 2000);// setTimeout executa o código especificado apenas uma vez
  });

  setInterval(horas, 1000);// setInterval executa infinitas vezes, com o intervalo de tempo especificado entre cada execução.

  //clearTimeout(alerta_unico); // Cancela o alerta agendado em setTimeout
  //clearInterval(alerta_intermitente); // Cancela o alerta agendado em setInterval

  var nome = prompt("Diga seu nome");
  localStorage.setItem("seuNome", nome);//Armazena dados no navegador do Usuário, parametros (chave, conteudo)
  //localStorage.removeItem("seuNome");//Remove o conteudo armazenado passando a chave
}

function ligar() {
  document.getElementById("lampada").src = "img/on.png";
}

function desligar() {
  document.getElementById("lampada").src = "img/off.png";
}


function horas() {
  var data_atual = new Date();
  var horas = data_atual.getHours() + ":" + data_atual.getMinutes() + ":" + data_atual.getSeconds();
  document.getElementById("hora").innerHTML = horas;

}
