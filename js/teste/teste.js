var btn = window.document.querySelector("#tipos");
var btn2 = document.getElementById("soma");
var btn3 = document.querySelector("#sauda");
var btn4 = document.querySelector("#reg");
var btn5 = document.querySelector("#loc");

btn.onclick = msg;

btn5.onclick = function() {
    window.location.reload();
}

btn2.onclick = function() {
  var n = Number(prompt("Digite o 1° valor"));
  soma(n);
};

btn3.onclick = function() {
  var op = Number(prompt("Digite um numero"));
  sauda(op);
}

btn4.onclick = function() {
  var op = Number(prompt("Digite um numero para contagem"));
  contagem(op);
}

function contagem(num) {
  for(let i = num;  i > 0; i--)
  alert(i);
}

function sauda(op) {

  switch(op) {
    case 1: {
      alert("Bom-Dia");
      break;
    }
    case 2: {
      alert("Boa-Tarde");
      break;
    }
    case 3: {
      alert("Boa-Noite");
      break;
    }
    default: {
      alert("Opção Incorreta");
    }
  }
}


function msg() {
  var num = 10;
  var text = "Rodrigo";
  var vdd = true;
  var nulo = null;
  var lista = []
  s = soma;

  alert("Numero: " + typeof(num) + "\nTexto: " + typeof(text) + "\nBoolean: " + typeof(vdd) + "\nNulo: " + typeof(nulo) + "\n Array: " + typeof(lista) + "\nFunc: " + typeof(s));
}

function soma(idade) {

  if(idade > 0) {
    if(idade > 0 && idade <= 6) {
      alert("Você é um bebê");
    }

    else if (idade > 6 && idade <= 10) {
      alert("Você é uma criança");
    }
    else if(idade > 10 && idade <= 13) {
      alert("Você é um pré Adolescente");
    }
    else if( idade > 13 && idade <=18) {
      alert("Você é um Adolescente");
    }
    else if(idade > 18 && idade <= 30) {
      alert("Você é um adulto");
    }
    else {
      alert("Você é um Idoso");
    }

  }// primeio if
  else {
    alert("Idade Incorreta !!");
  }
}
