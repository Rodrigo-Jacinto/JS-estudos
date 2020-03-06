class Pessoa {

    constructor(nome, idade = 0) {
        this.nome = nome;
        this.idade = idade;
    }

    lista() {
        
    }

}


class PessoaFisica extends Pessoa{

    constructor(cpf = 123) {
        super('rodrigo');
        this.cpf = cpf;
    }


    no = () => {
        console.log(this.cpf)
    }

}

let pf = new PessoaFisica();
pf.no();