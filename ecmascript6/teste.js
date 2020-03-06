let nome = "Rodrigo";
let sobrenome = "Jacinto";

//associa variavel e valores automatico no objeto, nova formar de declarar metodo
const pessoa = {
    nome, 
    sobrenome,
    listaNome() {
        console.log(this.nome, this.sobrenome);
    }
};

pessoa.listaNome();

//criar dicionario, com metodos próprios de inserção, remoção
let map = new Map();
map.set("nome", "rodrigo");
//map.clear(); apaga todos os itens
console.log(map.has('nome'), map.get('nome'));

//cria array, com valores únicos
let set = new Set([1,2,3,4,2,2,2]);
set.add(2)
set.add(2)
set.delete(4);//Apaga o valor 
console.log(set.values());

//objeto iteravél 
for(valor of set.values()) {
    console.log(valor);
}


