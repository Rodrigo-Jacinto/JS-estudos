window.onload = function() {

  var div = document.getElementsByTagName("div").item(0);
  //var ul = div.childNodes.item(1);//Retorna o primeiro elemento dentro da div, 0 é a quebra de linha
  var ul = div.firstElementChild;//Retorna o primeiro elemento dentro da div
  var li = ul.lastElementChild;//Retorna o elemento elemento dentro de Ul
  alert("Nome do ELemento: "+ ul.nodeName + "\nTipo do elemento:"+ ul.nodeType);
  alert(ul.firstElementChild.firstChild.nodeValue);

  var hr = document.createElement("hr");
  var li = document.createElement("li");
  li.setAttribute("style", "color:blue");
  li.appendChild(document.createTextNode("nova LI"));
  ul.appendChild(li);
  div.appendChild(hr);

  var select = document.createElement("select");
  select.setAttribute("id", "estados");
  var option = document.createElement("option");
  option.setAttribute("value", "PE");
  option.appendChild(document.createTextNode("Pernambuco"));

  select.appendChild(option);
  div.appendChild(select);

  var select2 = select.cloneNode(true);

  div.appendChild(select2);
}
