let promises = new Promise((resolve, reject) => {

    let resultado = true;
    setTimeout(() => {

        if (resultado) {
            resolve({ 'sucesso': 'true' });
        }
        else {
            reject("Resultado não Realizado");
        }


    }, 2000);

});

//excutando then e catch separado -- Pouco usado
// promises.then(data => { console.log(`${data}`) });
// promises.catch(data => { console.log(`${data}`) });


// Excutando then e catch aninhado
promises.then((data) => {
    console.log(data);
    return data;
})
    .then((data) => {
        console.log(data);
    })
    .catch((data) => { console.log(data) });

console.log("Fui invocado antes !!");


//Retornando uma promise
function fetixe(url) {

    return new Promise((resolve, reject) => {

        if (url) {
            resolve(url);
        }
        else {
            reject("Deu errado");
        }

    });

}

fetixe("www.google.com.br").then(data => {
    console.log(data)
}).catch(data => {
    console.log(data);

});