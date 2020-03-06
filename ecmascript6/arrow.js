//funções de expressão com arrow function
let msg = () => { console.log('Olá Mundo') };
//msg();
//Arrow functions incorporam o this do pai
const equipes = {
    nome: 'Equipe Z',
    membros: ['Goku', 'Curirin', 'Vegeta'],
    listaMembros() {
        this.membros.forEach(membro => {
            console.log(`${membro} faz parte da ${this.nome}`);
        });
    }

}

console.log(soma(10, 10));

equipes.listaMembros();

