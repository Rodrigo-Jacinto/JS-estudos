
// ENVIA DADOS E RECEBE DO SERVIDOR
fetch('http://localhost/prontaentrega/jogador.php', {
    method: 'post',
    body: JSON.stringify({ opcao: 2 })
}).then(r => {

    r.json().then(data => {
        this.setState({ lista: data });
    })
    //CAPTURA ERRO EM CASO O RETORNO DO SERVIDOR NÃO SER UM JSON
    .catch((err) => {
        console.log("Erro no retorno do json: ", err);
    });

}).catch((err) => {
    //CAPTURA ERRO EM CASO DE URL INVÁLIDA OU SEM CONEXÃO COM SERVIDOR
    console.log("Url inválida ou sem conexão com o servidor: ", err);
});


//APENAS RETORNA DDOS DO SERVIDOR
fetch('http://localhost/prontaentrega/jogador.php').then((r) => {

        r.json().then(json => this.setState({ lista: json })); 
});
