window.onload = function(){

/*Criando Nós
  -createElement - CRIA NOVO ELEMENTO HMTL
  -createTextNode - CRIA UM TEXTO
  -createAttribute - CRIA UM ATRIBUTO HTML, EXE: ID, CLASS, NAME
*/

/*Atribuição de Nós

  - appendChild - ADICIONA ELEMENTO NO FIM DE UM ELEMENTO PAI
  - insertBefore -ADICIONA ELEMENTO NO INICIO DE UM ELEMENTO FILHO
  - removeChild - REMOVE ELEMENTO FILHO DE UM ELEMENTO PAI
  - replaceChild -SUBISTITUI ELEMENTO FILHO DE UM ELEMENTO PAI
*/

  var div = document.getElementsByTagName("div").item(0);
  var hr = document.createElement("hr");
  div.appendChild(hr);

  var li = document.createElement("li");
  li.appendChild(document.createTextNode("Nova Li"));

  div.firstChild.appendChild(li);

  var atributo = document.createAttribute("style");
  atributo.value = "color:blue";
  li.setAttributeNode(atributo);

  //outra forma
  li.setAttribute("style", "color:blue");
  //DOM HTML API
  li.style.color = "blue";

  //Criando um select para pagina

    var select = document.createElement("select");
    select.setAttribute("id", "estados");
    var option = document.createElement("option");
    option.setAttribute("value", "DF");
    option.appendChild(document.creatTextNode("Distrito Federal"));

    select.appendChild(option);
    div.appendChild(select);

    //Removanedo elementos

    var del = div.firstChild;
    div.removeChild(del);

    //clondo elementos

    var select2 = select.cloneNode(true);
    div.appendChild(select2);

    var option2 = option.cloneNode(true);
    select.appendChild(option2);
}
