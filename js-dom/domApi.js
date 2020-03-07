window.onload = function(){

  /*Navegar nos Documentos da Árvore */
  /*Parentesco de Nós (Pai=parent, Filho=child, Irmão=sibling ) */

  var div = document.getElementsByTagName("div").item(0);

  //alert(div.parentNode);//Acessando o nó pai da div
  //alert(div.childNodes);//Acessando os nó filho da div

  var ul = div.childNodes.item(0);
  ul = div.firstChild;
  alert(ul);//Primeiro filho de div
  //alert(ul.nodeName);
  //alert(ul.nodeType);// 1 = Elemento 2 = Atributto 3 = texto

  //alert(ul.childNodes.item(0));//Primeiro filho de ul
  //alert(ul.firstChild);//Primeiro filho de ul
  //alert(ul.lastChild);//Ultimo filho

  //alert(ul.firstChild.firstChild.nodeValue);//Acessando o valor do filho do meu filho
  var li = ul.firstChild.lastChild.childNodes.item(1);
  //alert(li.nodeValue);
  //alert(li.previousSibling.firstChild.nodeValue);//irmão anterior
  //alert(li.nextSibling.firstChild.nodeValue);//irmão a frente

  //alert(div.firstChild.firstChild.lastChild.lastChild.lastChild.firstChild.firstChild.nodeValue);
}
