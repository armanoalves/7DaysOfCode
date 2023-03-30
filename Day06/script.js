let listaCompras = [
    frutas = {
        nome: 'frutas',
        lista: []
    },
    laticinios = {
        nome: 'laticínios',
        lista: []
    },
    congelados = {
        nome: 'congelados',
        lista: []
    },
    doces = {
        nome: 'doces',
        lista: []
    }
];


while (true) {
    let choice = prompt("Deseja adicionar uma comida na sua lista de compras? ");
    if (choice === 'sim') {
        let comida = prompt("Digite qual comida você quer adicionar: ");
        let choiceTwo = prompt("Qual categoria essa comida se encaixa? frutas, laticínios, congelados, doces");

        for (let i = 0; i < listaCompras.length; i++) {
            if (choiceTwo === listaCompras[i].lista[i]) {
                listaCompras[i].lista.push(comida);
            }
        }
    } else if (choice === "não") {
        break;
    } else {
        alert("Escolha digitada não está dentro dos parâmetros!!");
    }
    let remove = prompt("Deseja remover algum item da lista? ");
    if (remove === "sim") {
        alert(`Lista de compras: \n ${listaCompras[0].nome}: ${listaCompras[0].lista}\n ${listaCompras[1].nome}: ${listaCompras[1].lista}\n ${listaCompras[2].nome}: ${listaCompras[2].lista}\n ${listaCompras[3].nome}: ${listaCompras[3].lista}`);
        let removed = prompt("Qual você deseja remover?");
        for (let i = 0; i < listaCompras.length; i++) {
            if(listaCompras[i].nome === removed) {
                alert(`${removed} foi removido com sucesso!`);
                let index = listaCompras[i].indexOf(removed);
                listaCompras[i].splice(index, 1);
            }
        }
    } else {
        alert("Beleza!");
    }
}

alert("Tenha um bom dia!");
alert(`Lista de compras: \n ${listaCompras[0].nome}: ${listaCompras[0].lista}\n ${listaCompras[1].nome}: ${listaCompras[1].lista}\n ${listaCompras[2].nome}: ${listaCompras[2].lista}\n ${listaCompras[3].nome}: ${listaCompras[3].lista}`);

