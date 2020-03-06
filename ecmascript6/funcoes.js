
// Funções com parametros default
function bilingui(segundo_idioma, idade, padrao = "Brasil") {
  console.log(`Idioma Padrão: ${padrao} \n Idioma-2: ${segundo_idioma} \n Idade: ${idade}`);
}

bilingui();

//adiciona quantidade de parametros indefinido, podendo usar metodos do array
function restFunction(...parametrosInfinitos) {
  parametrosInfinitos.forEach(valor => {
    console.log(valor);
  });
}

restFunction(2,3,4,5,67,8);