var times_br = ['SPFC', 'Sport', 'Nautico'];
var times_ep = ['Barcelona', 'Real Madrid', 'Betis'];

//Metódo Streap, desmacha os outros array dentro de times_mundial
var times_mundial = ['Shandluneng', 'xFC', ...times_br, ...times_ep]

console.log(times_mundial);

//Nomeando indices do array
var [primeiro, segundo,,quarto] = ['Rodrigo', "Jacinto", "Silva", "Cruz"];
console.log(primeiro, segundo, quarto);

//cria um array com o restante que não foi noemado
var [primeiro, segundo, ...resto] = ['Rodrigo', "Jacinto", "Silva", "Cruz"];
console.log(resto) 
