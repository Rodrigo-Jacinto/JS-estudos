
  var btn = document.querySelector("#btn");
  btn.onclick = calcImc;

function calcImc() {

  var tdPeso = document.querySelector("#peso");
  var tdAltura = document.querySelector("#altura");
  var tdImc = document.querySelector("#imc");
  var campo = document.querySelector("#campo");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var imc = peso/(altura * altura);

  tdImc.textContent = imc.toFixed(2);

  
}
