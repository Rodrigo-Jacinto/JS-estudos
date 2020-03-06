(function(){

  var pessoa = {
    nome: "Rodrigo",
    outro: function(){
      return this;
    }
  }

  function qlq() {
    return this;
  }

  function Pessoa() {
    this.nome = "Rodrigo";
  }

  var p = new Pessoa();
  console.log(typeof(p));
  console.log();
})();
