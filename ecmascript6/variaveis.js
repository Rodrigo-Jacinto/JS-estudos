var nome = "Rodrigo Js"; // Escopo global

if(nome) {
  let nome = "Robson" // Escopo Local
}

//Será imprimido o valor do escopo global
console.log(nome);

//Constante declaradas não pode ser modificadas
const NASCIMENTO = 1992;

//Template String, colocando as variaveis dentro de crase
console.log(`Boa noite, ${nome}`);

//Repete o conteúdo da String
console.log(" gol".repeat(3));
