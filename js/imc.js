document.getElementById("calcular").onclick = function() {

      var peso = +document.getElementById("peso").value;
      var metro = +document.getElementById("metro").value;
      var cm = +document.getElementById("cm").value;

      var altura = (metro * 100 + cm)/100;
      resultado = peso/(altura * altura);

      document.getElementById("imc").value = resultado.toFixed(2);
}
