onload = function() {
  carregarPolt();

  var imagens = document.getElementsByTagName("img");

  for(var i = 0; i < imagens.length; i++){

      imagens[i].onclick = statusPoltrona(i);
  }

}

function statusPoltrona(poltrona) {

    return function(){
        var src = document.getElementsByTagName("img")[poltrona].src;

        if(src.indexOf("poltrona_disponivel.jpg") > 0)
        {
              alert("Poltrona Disponivel");
        }
        else if(src.indexOf("poltrona_ocupada.jpg") > 0)
        {
              alert("Poltrona Ocupada");

        }
        else
        {
            alert("Sua Poltrona");
        }

  }
}


imagens = document.getElementsByTagName("img");
poltronas = [true, false, true, true, true, false, true, true];
function carregarPolt()
{
      for(var i = 0; i < imagens.length; i++)
      {
          if(poltronas[i])
          {
              imagens[i].src = "img/poltrona_disponivel.jpg";
          }
          else
          {
              imagens[i].src = "img/poltrona_ocupada.jpg";
          }
      }//fim do for

}//Fim da function

function selecionarPoltrona()
{

    for(var i = 0; i < poltronas.length; i++)
    {
        if(poltronas[i])
        {
          imagens[i].src = "img/poltrona_selecionada.jpg";

          var opcao = confirm("Você deseja selecionar essa poltrona ?");
          if(opcao)
          {
            poltronas[i] = false;
            break;
          }
          else
          {
            imagens[i].src = "img/poltrona_disponivel.jpg";
          }
        }//fim do if poltrona

    }//Fim do For

}//Fim da Fuction


function selecionarPoltPar()
{
    for(var i = 0; i < poltronas.length; i++)
    {
        if(poltronas[i] && poltronas[i+1])
        {
          imagens[i].src = "img/poltrona_selecionada.jpg";
          imagens[i+1].src = "img/poltrona_selecionada.jpg";

          var opcao = confirm("Você deseja selecionar essas poltronas ?");
          if(opcao)
          {
            poltronas[i] = false;
            poltronas[i+1] = false;
            break;
          }
          else
          {
            imagens[i].src = "img/poltrona_disponivel.jpg";
            imagens[i+1].src = "img/poltrona_disponivel.jpg";

          }
        }//fim do if poltrona

    }//Fim do For

}//Fim da Fuction
