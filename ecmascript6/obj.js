//Nomeia propriedades do objeto
var { nome, rg } = { nome: 'Rodrigo', idade: 26, cpf: 123, rg: 4321 };
console.log(nome, rg);

//Nomeia propriedades do objeto
var { nome, cursos } = { nome: 'Rodrigo', idade: 26, cursos: ['Java', 'PHP', 'Python'] };
console.log(nome, cursos[0]);

//Modificando o nome da variavel para apelido
let { sobrenome: apelido } = { sobrenome: "Jacinto" };

//exemplo prático de como usar
let pessoas = [
    { nome: 'Rodrigo', numero: 123, idade: 26 },
    { nome: 'Robson', numero: 321, idade: 28 },
    { nome: "Jacinto", numero: 8910, idade: 54 }
]

function forma1({ numero }) {
    console.log('Forma 1: ', numero);
}

function forma2([, , { numero }]) {
    console.log('Forma 2', numero);
}

let [, , p3] = pessoas;

forma1(p3);
forma2(pessoas);

//Exemplo 2
const equipe = {
    membros: ['Goku', 'Curirin', 'Vegeta']
}

let { membros: [, membro2] } = equipe;