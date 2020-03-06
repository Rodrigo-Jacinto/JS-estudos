(function(){
  'use strict'
  var $visor = document.querySelector("[data-visor='visor']");
  var $btn_igual = document.querySelector("[data-igual='igual']");
  var $btn_limpa = document.querySelector("[data-ce='ce']");
  var $buttons = document.querySelectorAll('button')

  for(let i = 0; i < $buttons.length; i++) {
    $buttons[i].addEventListener('click', function(){
      buttonHandler($buttons[i]);
    }, false);
  }

  $btn_limpa.addEventListener('click', limpa_visor, false);
  $btn_igual.addEventListener('click', total, false);

  function buttonHandler(btn) {
    $visor.value += btn.value;
  }

  function limpa_visor() {
    $visor.value = "";
  }

  function total() {

    if($visor.value == "") {
      semCalc();
    } else {
        if($visor.value.includes("+")) {
            var valores = $visor.value.split("+");
            $visor.value = Number(valores[0]) + Number(valores[1]);
        }
        else if($visor.value.includes("-")) {
            var valores = $visor.value.split("-");
            $visor.value = Number(valores[0]) - Number(valores[1]);
        }
        else if($visor.value.includes("*")) {
            var valores = $visor.value.split("*");
            $visor.value = Number(valores[0]) * Number(valores[1]);
        }
        else if($visor.value.includes("/")) {
            var valores = $visor.value.split("/");
            $visor.value = Number(valores[0]) / Number(valores[1]);
        }
    }
  }

  function semCalc() {

    setTimeout(function(){
      $visor.value = "Digite uma Expressão";
      $visor.style = 'color:red';
    }, 1000);

    setTimeout(function(){
      $visor.value = "";
      $visor.style = 'color:none';
    }, 2000);
  }

})();
